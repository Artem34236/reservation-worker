import axios from "axios";

const url = import.meta.env.VITE_API_URL

export const API = axios.create({
    baseURL: url
})