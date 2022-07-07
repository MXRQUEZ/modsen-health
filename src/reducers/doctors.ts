import { IDoctor } from "@/types/IDoctor";
import {
  DoctorsActions,
  FETCH_DOCTORS_FAILURE,
  FETCH_DOCTORS_REQUEST,
  FETCH_DOCTORS_SUCCESS,
} from "@/types/doctorsAction";

interface IDoctorsState {
  doctors: IDoctor[];
  pending: boolean;
  error: string | null;
}

const initialState: IDoctorsState = {
  doctors: [],
  pending: false,
  error: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const doctorsReducer = (state = initialState, action: DoctorsActions): IDoctorsState => {
  switch (action.type) {
    case FETCH_DOCTORS_REQUEST:
      return { ...state, pending: true };
    case FETCH_DOCTORS_SUCCESS:
      return { ...state, pending: false, doctors: action.payload, error: null };
    case FETCH_DOCTORS_FAILURE:
      return { ...state, pending: false, error: action.payload };
    default:
      return { ...state };
  }
};
