import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./reducers/auth";
import { doctorsReducer } from "./reducers/doctors";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  auth: authReducer,
  doctors: doctorsReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });
};

export const store = setupStore();

sagaMiddleware.run(rootSaga);
