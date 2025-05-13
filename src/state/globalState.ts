import { create } from "zustand";
import { Company, Industrys } from "../types/type";
import { API } from "../axios/axios";

export type GlobalState = {
    isLoading: boolean;
    company: {
        data: {
            company: Company | null,
            industrys: Industrys | null,
        }
        loadCompany: () => Promise<void>;
    };
};

export const useStore = create<GlobalState>()((set) => ({
    isLoading: false,
    company: {
        data: {
            company: null,
            industrys: null,
        },
        loadCompany: async () => {
            set({ isLoading: true });
            try {
                const [companyRes, industrysRes] = await Promise.all([
                    API.get(`/company/current/`),
                    API.get(`/industries/`)
                ])
                set((state) => ({
                    isLoading: false,
                    company: {
                        ...state.company,
                        data: {
                            company: companyRes.data,
                            industrys: industrysRes.data,
                        },
                    },
                }));
            } catch (error) {
                localStorage.clear();
                
                set((state) => ({
                    isLoading: false,
                    company: {
                        ...state.company,
                        data: {
                            company: null,
                            industrys: null,
                        },
                    },
                }));
            }
        },

    }
}));