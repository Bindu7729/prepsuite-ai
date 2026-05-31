import axios from "axios";

// =========================================================
// CENTRAL FULL-STACK CONFIGURATION INTERCEPTOR
// =========================================================
// LOCAL RUNTIME: "http://localhost:5000"
// PRODUCTION PRODUCTION DEPLOYMENT: Swap to live Render link later!

const API = axios.create({
  baseURL: "http://localhost:5000", 
  headers: {
    "Content-Type": "application/json",
  },
});

// AUTOMATED JWT ROUTE MIDDLEWARE INJECTOR
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;