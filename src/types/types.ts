import { rootReducer, setupStore } from "@/store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TokenClient = any;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
