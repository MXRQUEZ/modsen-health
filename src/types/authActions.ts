import { IUser } from "./IUser";

export const SIGNIN_FIREBASE = "SIGNIN_FIREBASE";
export const SIGNIN_REQUEST = "SIGNIN_REQUEST";
export const SIGNOUT_FIREBASE = "SIGNOUT_FIREBASE";
export const AUTH_FAILURE = "AUTH_ERROR";

export type SignInFirebase = {
  type: typeof SIGNIN_FIREBASE;
  payload: IUser;
};

export type SignOutFirebase = {
  type: typeof SIGNOUT_FIREBASE;
};

export type AuthFailure = {
  type: typeof AUTH_FAILURE;
  payload: string;
};

export type SignInRequest = {
  type: typeof SIGNIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
};

export type AuthActions = SignInFirebase | SignOutFirebase | AuthFailure | SignInRequest;
