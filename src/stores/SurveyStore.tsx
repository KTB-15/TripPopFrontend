import { create } from 'zustand';

interface SurveyStore {
  progress: number;
  incProgress: () => void;
  decProgress: () => void;
  resetProgress: () => void;
}

const useSurveyStore = create<SurveyStore>((set) => ({
  progress: 1,
  incProgress: () => set((state) => ({ progress: state.progress + 1 })),
  decProgress: () => set((state) => ({ progress: state.progress - 1 })),
  resetProgress: () => set(() => ({ progress: 1 })),
}));

export default useSurveyStore;
