import { create } from 'zustand';

interface PreloaderState {
    isLoading: boolean;
    setLoading: (isLoading: boolean) => void;
}

export const usePreloaderStore = create<PreloaderState>((set) => ({
    isLoading: true,
    setLoading: (isLoading) => set({ isLoading }),
}));
