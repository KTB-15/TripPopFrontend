import { create } from 'zustand';

interface SurveyStore {
  progress: number;
  choices: number[];
  setChoice: (value: number) => void;
  incProgress: () => void;
  decProgress: () => void;
  resetProgress: () => void;
}

export const QUESTIONS = [
  '',
  '자연의 위대함이란.. 역시 여행은 자연에서 힐링하는거지!',
  '자고로 여행은 외박이다!🔥',
  '뭐야, 여기 처음 보는 곳인데? 완전 짜릿하잖아!🤩',
  '거지지만 행복해요😂 지금 아니면 언제 이런 곳에서 자보겠어?',
  '여행은 힐링하러 가는거지, 액티비티? 노땡큐 🤲',
  '괜히 이상한데 가지 말고 핫플 가야지~',
  '계획? 대충 뭐 먹고 어디 갈지만 생각하면 되지 뭐~',
  '남는 건 사진뿐📸 인생샷 건져보자~',
] as const;

const useSurveyStore = create<SurveyStore>((set) => ({
  progress: 1,
  choices: Array(QUESTIONS.length - 1).fill(4),
  setChoice: (value: number) =>
    set((state) => {
      const updated = [...state.choices];
      updated[state.progress - 1] = value;
      return { choices: updated };
    }),
  incProgress: () => set((state) => ({ progress: Math.min(state.progress + 1, QUESTIONS.length - 1) })),
  decProgress: () => set((state) => ({ progress: Math.max(state.progress - 1, 1) })),
  resetProgress: () => set(() => ({ progress: 1, choices: Array(QUESTIONS.length - 1).fill(4) })),
}));

export default useSurveyStore;
