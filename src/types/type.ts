
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