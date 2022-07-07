import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebase = initializeApp({
  apiKey: "AIzaSyANazE5-1MHck5NwDpTH7Y-wEMMI2y5E14",
  authDomain: "test-calendarapi-354812.firebaseapp.com",
  projectId: "test-calendarapi-354812",
  storageBucket: "test-calendarapi-354812.appspot.com",
  messagingSenderId: "876132436532",
  appId: "1:876132436532:web:346454d2877f761eac5861",
});

export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);

export const collectionName = "clinic";
export const collectionFiles = {
  doctors: "doctors",
};
