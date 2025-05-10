import axios from "axios";

export const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

API.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


API.interceptors.response.use(
    res => res,
    async error => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refresh_token');
                const response = await axios.post('/auth/refresh', { refresh: refreshToken });

                localStorage.setItem('access_token', response.data.access);

                originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
                return API(originalRequest); 
            } catch (err) {
                localStorage.clear();
                window.location.href = '/sign_in';
            }
        }

        return Promise.reject(error);
    }
);