// src/api/auth.js
import API from "./axiosSetup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const login = async (credentials: { username: string; password: string; remember: boolean }) => {
  try {
    console.log("Credentials:", credentials);

    const res = await axios.post(`${API.defaults.baseURL}/auth/token/`, {
      username: credentials.username,
      password: credentials.password,
    });

    console.log("Login Response:", res);

    const { access, refresh } = res.data;

    if (credentials.remember) {
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
    } else {
      sessionStorage.setItem("access_token", access);
      sessionStorage.setItem("refresh_token", refresh);
    }

    return { access, refresh }; // 
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error; 
  }
};


export const registerUser = async (userData) => {
  try {
    const res = await API.post("auth/register", userData); 
    return res.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw { detail: "Network error, please try again." };
    }
  }
};


export const logout = async () => {
  try {
    const refresh = localStorage.getItem("refresh_token");
    if (refresh) {
      await API.post("/auth/logout/", { refresh });
    }
  } catch (err) {
    // ignore server errors on logout
  } finally {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }
};
