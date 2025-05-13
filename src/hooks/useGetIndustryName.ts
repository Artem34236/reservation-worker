import { Category, } from "../types/type";



export function useGet1Name(id: number, industry: Category[] | null): string {
    const industryItem = industry?.find(item => item.id === id);
    return industryItem ? industryItem.name : '';
}

