import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

console.log("🌍 API Base URL:", API_BASE);

const api = axios.create({
  baseURL: API_BASE,
});

export default api;
