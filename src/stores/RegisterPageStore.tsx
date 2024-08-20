import create from 'zustand';

interface RegisterPageState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useStore = create<RegisterPageState>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));
