import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebase = initializeApp({
  apiKey: "AIzaSyANazE5-1MHck5NwDpTH7Y-wEMMI2y5E14",
  authDomain: "test-calendarapi-354812.firebaseapp.com",
  projectId: "test-calendarapi-354812",
  storageBucket: "test-calendarapi-354812.appspot.com",
  messagingSenderId: "876132436532",
  appId: "1:876132436532:web:346454d2877f761eac5861",
});

const auth = getAuth(firebase);
const firestore = getFirestore(firebase);

const initialAuthState = {
  firebase,
  auth,
  firestore,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    // initOpenWeather(state, action: PayloadAction<>) {
    //   state.openWeather = action.payload;
    // },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
