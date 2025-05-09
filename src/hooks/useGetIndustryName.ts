import { Category, Industrys } from "../types/type";



export function useGet1Name(id: number, industry: Category[] | null): string {
    const industryItem = industry?.find(item => item.id === id);
    return industryItem ? industryItem.name : '';
}



export function useGetIndustryName(id: number, proffession: Industrys | null): string {
    const industryItem = proffession?.results.find(item => item.id === id);
    return industryItem ? industryItem.name : '';
}