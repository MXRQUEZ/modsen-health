import { SIGNIN_REQUEST } from "../types/authActions";
import {
  AuthFailure,
  AUTH_FAILURE,
  SignInFirebase,
  SIGNIN_FIREBASE,
  SignOutFirebase,
  SIGNOUT_FIREBASE,
} from "@/types/authActions";
import { IUser } from "@/types/IUser";

export const signInFirebase = (user: IUser): SignInFirebase => ({
  type: SIGNIN_FIREBASE,
  payload: user,
});

export const signOutFirebase = (): SignOutFirebase => ({
  type: SIGNOUT_FIREBASE,
});

export const authFailure = (error: string): AuthFailure => ({
  type: AUTH_FAILURE,
  payload: error,
});

export const signInRequest = (email: string, password: string) => ({
  type: SIGNIN_REQUEST,
  payload: { email, password },
});
