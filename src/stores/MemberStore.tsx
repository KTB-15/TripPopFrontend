import { create } from 'zustand';

interface TravelStyle {
  travelStyle1: number;
  travelStyle2: number;
  travelStyle3: number;
  travelStyle4: number;
  travelStyle5: number;
  travelStyle6: number;
  travelStyle7: number;
  travelStyle8: number;
}

interface MemberStore {
  age?: number;
  gender?: string;
  travelStyles: TravelStyle;
  setTravelStyle: (question: number, style: number) => void;
}

// 사용자 성향
const useMemberStore = create<MemberStore>((set) => ({
  travelStyles: {
    travelStyle1: 4,
    travelStyle2: 4,
    travelStyle3: 4,
    travelStyle4: 4,
    travelStyle5: 4,
    travelStyle6: 4,
    travelStyle7: 4,
    travelStyle8: 4,
  },
  setTravelStyle: (question: number, style: number) =>
    set((state) => ({ travelStyles: { ...state.travelStyles, [`travelStyle${question}`]: style } })),
}));

export default useMemberStore;
