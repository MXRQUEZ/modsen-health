import { IDoctor } from "@/types/IDoctor";
import {
  FETCH_DOCTORS_REQUEST,
  FETCH_DOCTORS_FAILURE,
  FETCH_DOCTORS_SUCCESS,
  FetchDoctorsRequest,
  FetchDoctorsSuccess,
  FetchDoctorsFailure,
} from "@/types/doctorsAction";

export const fetchDoctorsRequest = (): FetchDoctorsRequest => ({
  type: FETCH_DOCTORS_REQUEST,
});

export const fetchDoctorsSuccess = (doctors: IDoctor[]): FetchDoctorsSuccess => ({
  type: FETCH_DOCTORS_SUCCESS,
  payload: doctors,
});

export const fetchDoctorsFailure = (error: string): FetchDoctorsFailure => ({
  type: FETCH_DOCTORS_FAILURE,
  payload: error,
});
