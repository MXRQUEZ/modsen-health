import { signInWithEmailAndPassword, signOut, UserCredential } from "firebase/auth";
import { all, call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { auth } from "@/firebase";
import { signInFirebase, authFailure, signOutFirebase } from "../actions/auth";
import { SIGNOUT_FIREBASE, SIGNIN_REQUEST, SignInRequest } from "../types/authActions";
import { IUser } from "@/types/IUser";

function* signInSaga(action: SignInRequest): Generator<StrictEffect, void> {
  const { email, password } = action.payload;
  try {
    const response = yield call(() => signInWithEmailAndPassword(auth, email, password));
    const { user } = response as UserCredential;
    const clinicUser: IUser = {
      email: user.email || "empty",
    };
    yield put(signInFirebase(clinicUser));
  } catch (e) {
    yield put(authFailure("SignIn failed"));
  }
}

function* signOutSaga(): Generator<StrictEffect, void> {
  yield call(() => {
    signOut(auth)
      .then(() => {
        put(signOutFirebase());
      })
      .catch((error) => {
        put(authFailure(error.message));
      });
  });
}

export function* authSaga() {
  yield all([takeLatest(SIGNIN_REQUEST, signInSaga), takeLatest(SIGNOUT_FIREBASE, signOutSaga)]);
}
