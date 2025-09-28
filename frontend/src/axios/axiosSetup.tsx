// src/api/axios.js
import axios from "axios";

const API = axios.create({
  baseURL:"http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // set true if using cookies
});

// Helper to get tokens
const getLocalAccessToken = () => localStorage.getItem("access_token");
const getLocalRefreshToken = () => localStorage.getItem("refresh_token");
const setLocalTokens = (access, refresh) => {
  localStorage.setItem("access_token", access);
  if (refresh) localStorage.setItem("refresh_token", refresh);
};

// Request: attach access token
API.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response: if 401 because access expired, try to refresh
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

API.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      // Prevent infinite retry loop
      originalRequest._retry = true;

      if (isRefreshing) {
        // queue the requests while refresh in progress
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = "Bearer " + token;
            return API(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      const refreshToken = getLocalRefreshToken();

      if (!refreshToken) {
        // No refresh token — logout or redirect to login
        isRefreshing = false;
        return Promise.reject(error);
      }

      return new Promise(function (resolve, reject) {
        axios
          .post(`${API.defaults.baseURL}/auth/token/refresh/`, {
            refresh: refreshToken,
          })
          .then((res) => {
            const newAccess = res.data.access;
            // Optionally new refresh token: res.data.refresh (if rotate enabled)
            setLocalTokens(newAccess, res.data.refresh || refreshToken);

            API.defaults.headers.common.Authorization = "Bearer " + newAccess;
            originalRequest.headers.Authorization = "Bearer " + newAccess;
            processQueue(null, newAccess);
            resolve(API(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            // optionally perform logout if refresh failed
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  }
);

export default API;
