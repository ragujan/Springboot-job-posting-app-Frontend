import axios from "axios";


const API_BASE = import.meta.env.VITE_API_BASE;


const axiosInstance = axios.create({
  baseURL: API_BASE,
});

axiosInstance.interceptors.request.use(config=>{
    const token = localStorage.getItem('adminToken');
    if(token && config.headers){
        config.headers.Authorization = `Bearer ${token}`
    }
    console.log("config",config);
    return config;
})


export default axiosInstance;