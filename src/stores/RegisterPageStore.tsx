// src/store.ts
import create from 'zustand';

interface StoreState {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const useStore = create<StoreState>((set) => ({
    isModalOpen: false,
    openModal: () => set({ isModalOpen: true }),
    closeModal: () => set({ isModalOpen: false }),
}));
