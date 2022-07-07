import { all, call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { fetchDoctors } from "@/firebase/api";
import { IDoctor } from "@/types/IDoctor";
import { fetchDoctorsFailure, fetchDoctorsSuccess } from "../actions/doctors";
import { FETCH_DOCTORS_REQUEST } from "@/types/doctorsAction";

function* fetchDoctorsSaga(): Generator<StrictEffect, void, IDoctor[]> {
  try {
    const response = yield call(fetchDoctors);
    yield put(fetchDoctorsSuccess(response));
  } catch (e) {
    yield put(fetchDoctorsFailure("Failed to load doctors"));
  }
}

function* doctorsSaga() {
  yield all([takeLatest(FETCH_DOCTORS_REQUEST, fetchDoctorsSaga)]);
}

export default doctorsSaga;
