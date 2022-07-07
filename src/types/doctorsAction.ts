import { IDoctor } from "./IDoctor";

export const FETCH_DOCTORS_REQUEST = "FETCH_DOCTORS_REQUEST";
export const FETCH_DOCTORS_SUCCESS = "FETCH_DOCTORS_SUCCESS";
export const FETCH_DOCTORS_FAILURE = "FETCH_DOCTORS_FAILURE";

export interface FetchDoctorsRequest {
  type: typeof FETCH_DOCTORS_REQUEST;
}

export type FetchDoctorsSuccess = {
  type: typeof FETCH_DOCTORS_SUCCESS;
  payload: IDoctor[];
};

export type FetchDoctorsFailure = {
  type: typeof FETCH_DOCTORS_FAILURE;
  payload: string;
};

export type DoctorsActions = FetchDoctorsRequest | FetchDoctorsSuccess | FetchDoctorsFailure;
