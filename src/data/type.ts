// API 요청/ 응답 형식

// 추천 이미지
export interface RecommendedPlaceReq {
  places: number[];
}

export interface PlaceRes {
  placeId: number;
  image: string; // base64
}

export interface RecommendedPlaceRes {
  places: PlaceRes[];
}

// 설문지
export interface SurveyReq {
  travelStyle1: number;
  travelStyle2: number;
  travelStyle3: number;
  travelStyle4: number;
  travelStyle5: number;
  travelStyle6: number;
  travelStyle7: number;
  travelStyle8: number;
}
