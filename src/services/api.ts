import axios from "axios";

const api = axios.create({
    baseURL: "https://api-aula-xi.vercel.app",
})    

api.interceptors.request.use(config =>{

    config.headers={
        ...config.headers,
        'x-token': localStorage.getItem("token"),
    }
    return config;
})
export default api;


// import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

// const api: AxiosInstance = axios.create({
//   baseURL: 'https://api-aula-xi.vercel.app',
// });

// api.interceptors.request.use((config: AxiosRequestConfig) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers = {
//       ...config.headers,
//       'x-token': token,
//     };
//   }
//   return config;
// });

// export default api;