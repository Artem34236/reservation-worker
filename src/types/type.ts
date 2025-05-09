
export type Company = {
    id: number
    name: string
    phone: string
    address: string
    industry: number
}

export type Worker = {
    id: number
    full_name: string
    profession: string
    phone: string
    client_duration_minutes: number
    work_start: string
    company: number
}

export type Free_slots = {
    free_slots: string[]
}

export type Category = {
    id: number
    name: string
}

export type Proffession = {
    id: number
    profession: string
}

export type Dates = {
    html: string
    date: number
    month: number
    year: number
}

export interface Companys {
    count: number
    next: string | null
    previous: string | null
    results: Company[]
}

export interface Workers {
    count: number
    next: string | null
    previous: string | null
    results: Worker[]
}

export interface Industrys {
    count: number
    next: string | null
    previous: string | null
    results: Category[]
}

