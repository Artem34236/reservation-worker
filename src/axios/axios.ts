import axios from "axios";



export const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

API.interceptors.request.use(config => {
    const token = localStorage.getItem('access');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


API.interceptors.response.use(
    res => res,
    async error => {
        if (error.response?.status === 401) {
            localStorage.clear();
            window.location.href = '/sign_in';
        }
        return Promise.reject(error);
    }
);