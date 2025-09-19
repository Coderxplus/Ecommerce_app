// src/api/auth.js
import API from "./axiosSetup";
import axios from "axios";

export const login = async (credentials) => {
  // Using axios directly to hit token endpoint (no Authorization header needed)
  const res = await axios.post(`${API.defaults.baseURL}/api/auth/token/`, credentials);
  // Response likely contains access and refresh tokens
  const { access, refresh } = res.data;
  localStorage.setItem("access_token", access);
  localStorage.setItem("refresh_token", refresh);
  return res.data;
};

export const register = async (userData) => {
  const res = await API.post("/api/auth/register/", userData);
  return res.data;
};

export const logout = async () => {
  try {
    const refresh = localStorage.getItem("refresh_token");
    if (refresh) {
      await API.post("/api/auth/logout/", { refresh });
    }
  } catch (err) {
    // ignore server errors on logout
  } finally {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }
};
