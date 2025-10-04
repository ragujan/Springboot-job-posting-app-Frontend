import axios from "axios";

const API_BASE = import.meta.env.VITE_AUTH_API_BASE;

console.log("🌍 AUTH API URL:", API_BASE);

const authApi = axios.create({
  baseURL: API_BASE,
});

export default authApi;
