import { create } from 'zustand';

export interface FormData {
  memberId: string;
  password: string;
  passwordConfirm: string;
  gender: string;
  ageGroup: string;
}

interface RegisterPageStore {
  isModalOpen: boolean;
  formData: FormData;
  openModal: () => void;
  closeModal: () => void;
  setFormData: (data: Partial<FormData>) => void;
  resetFormData: () => void;
}

export const useStore = create<RegisterPageStore>((set) => ({
  isModalOpen: false,
  formData: {
    memberId: '',
    password: '',
    passwordConfirm: '',
    gender: '',
    ageGroup: '',
  },
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => {
    set({ isModalOpen: false });
    set({ formData: { memberId: '', password: '', passwordConfirm: '', gender: '', ageGroup: '' } });
  },
  setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  resetFormData: () => set({ formData: { memberId: '', password: '', passwordConfirm: '', gender: '', ageGroup: '' } }),
}));
