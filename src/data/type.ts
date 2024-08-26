// API 요청/ 응답 형식

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
