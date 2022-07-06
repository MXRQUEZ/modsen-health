import { all, fork } from "redux-saga/effects";
import { authSaga } from "./authSaga";
import doctorsSaga from "./doctorsSaga";

export function* rootSaga() {
  yield all([fork(doctorsSaga), fork(authSaga)]);
}
