export interface IFavouriteData {
  id: number;
}

export interface IAddFavouriteRequest {
  productId: string;
}

export interface IFavouriteResponse {
  responseCode: number;
  data: Data;
}

export interface IRemoveFavouriteRequest {
  id: number;
}

export interface IRemoveFavouriteResponse {
  responseCode: number;
  data: Data;
}

export interface Data {
  message: string;
}
