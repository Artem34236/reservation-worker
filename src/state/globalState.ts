import { create } from "zustand";
import { Company, Category, Worker } from "../types/type";
import { API } from "../axios/axios";

export type GlobalState = {
    isLoading: boolean;
    company: {
        data: {
            company: Company | null,
            industrys: Category[] | null,
        }
        loadCompany: () => Promise<void>;
    };
    worker: {
        data: {
            worker: Worker | null,
            proffession: Category[] | null,
        }
        loadWorker: () => Promise<void>;
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

    },

    worker: {
        data: {
            worker: null,
            proffession: null,
        },
        loadWorker: async () => {
            set({ isLoading: true });
            try {
                const workerId = localStorage.getItem('id');
                const [workerRes, proffessionRes] = await Promise.all([
                    API.get(`/workers/${workerId}`),
                    API.get(`/workers/professions/`)
                ])
                set((state) => ({
                    isLoading: false,
                    worker: {
                        ...state.worker,
                        data: {
                            worker: workerRes.data,
                            proffession: proffessionRes.data,
                        },
                    },
                }));
            } catch (error) {
                localStorage.clear();

                set((state) => ({
                    isLoading: false,
                    worker: {
                        ...state.worker,
                        data: {
                            worker: null,
                            proffession: null,
                        },
                    },
                }));
            }
        },

    }
}));