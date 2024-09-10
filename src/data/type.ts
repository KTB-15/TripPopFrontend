// API 요청/ 응답 형식

// 추천 이미지
export interface RecommendedPlaceReq {
  places: number[];
}

export interface RecommendedPlaceRes {
  placeId: number;
  placeImage: string; // base64
  areaName: string;
  roadName: string;
  isFavourite: boolean;
}

export type FavouriteToggleReq = Pick<RecommendedPlaceRes, 'placeId' | 'isFavourite'>;

// 설문지
export interface SurveyReq {
  travelStyle1: number;
  travelStyle2: number;
  // travelStyle3: number; // 미사용
  travelStyle4: number;
  travelStyle5: number;
  travelStyle6: number;
  travelStyle7: number;
  travelStyle8: number;
}
