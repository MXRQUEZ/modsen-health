import { AuthActions, SIGNIN_REQUEST, SIGNOUT_FIREBASE, SIGNIN_FIREBASE, AUTH_FAILURE } from "@/types/authActions";
import { IUser } from "@/types/IUser";

interface IAuthState {
  user: IUser | null;
  isAuth: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  user: null,
  isAuth: false,
  error: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const authReducer = (state = initialState, action: AuthActions): IAuthState => {
  switch (action.type) {
    case SIGNIN_FIREBASE:
      return { ...state, user: action.payload, isAuth: true };
    case SIGNIN_REQUEST:
      return { ...state };
    case SIGNOUT_FIREBASE:
      return { ...state, user: null, isAuth: false };
    case AUTH_FAILURE:
      return { ...state, user: null, isAuth: false, error: action.payload };
    default:
      return state;
  }
};
