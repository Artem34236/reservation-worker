import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AftorizationType = 'user' | 'company' | 'worker'

export type GlobalState = {
    aftorization: {
        type: AftorizationType
        setIsAftorization: (type: AftorizationType) => void
    }
}

export const useStore = create<GlobalState>()(
    persist(
        (set) => ({
            aftorization: {
                type: 'user',
                setIsAftorization: (type: AftorizationType) =>
                    set((state) => ({
                        aftorization: {
                            ...state.aftorization,
                            type
                        }
                    })),
            },
        }),
        {
            name: 'global-storage',
            partialize: (state) => ({
                aftorization: {
                    type: state.aftorization.type
                }
            }),
            storage: createJSONStorage(() => sessionStorage),
        },
    )
);