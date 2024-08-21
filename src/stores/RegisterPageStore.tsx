// RegisterPageStore.ts
import { create } from 'zustand';

interface RegisterPageStore {
  isModalOpen: boolean;
  formData: {
    id: string;
    password: string;
    passwordConfirm: string;
    gender: string;
    ageGroup: string;
  };
  openModal: () => void;
  closeModal: () => void;
  setFormData: (data: Partial<RegisterPageStore['formData']>) => void;
  resetFormData: () => void;
}

export const useStore = create<RegisterPageStore>((set) => ({
  isModalOpen: false,
  formData: {
    id: '',
    password: '',
    passwordConfirm: '',
    gender: '',
    ageGroup: '',
  },
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => {
    set({ isModalOpen: false });
    set({ formData: { id: '', password: '', passwordConfirm: '', gender: '', ageGroup: '' } });
  },
  setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  resetFormData: () => set({ formData: { id: '', password: '', passwordConfirm: '', gender: '', ageGroup: '' } }),
}));
