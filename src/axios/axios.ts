import axios from "axios";
import { Companys } from "../types/type";


export const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export async function getCompanys() {
    await API.get('/companies/')
        .then((data) => {
            return (data.data)
        })
        .catch((err) => console.log('Ошибка загрузки компаний', err))
}

export async function getWorkers(CompanyId: number) {
    await API.get(`/companies/${CompanyId}/workers`)
        .then((data) => {
            return (data.data)
        })
        .catch((err) => console.log('Ошибка загрузки Работников', err))
}

export async function getCompany(CompanyId: string, set: React.Dispatch<React.SetStateAction<Companys | null>>) {
    await API.get(`/companies/?id=${CompanyId}`)
        .then((data) => {
            set(data.data)
        })
        .catch((err) => console.log('Ошибка загрузки компании', err))
}