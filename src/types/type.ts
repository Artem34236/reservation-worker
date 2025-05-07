
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
    client_duration_minutes : number
    work_start: string
    company: number
}

export interface Companys{
    count: number
    next: string | null
    previous: string | null
    results: Company[]
}

export interface Workers{
    count: number
    next: string | null
    previous: string | null
    results: Worker[]
}