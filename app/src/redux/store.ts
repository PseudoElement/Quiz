import { quizApi } from "./API/quizAPI";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import stageReducer from "./reducers/stageQuizReducer";

export const store = configureStore({
     reducer: {
          [quizApi.reducerPath]: quizApi.reducer,
          stageReducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(quizApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;