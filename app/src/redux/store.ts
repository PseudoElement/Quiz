import settingsQuizReducer from "./reducers/settingsQuizReducer";
import { quizApi } from "./API/quizAPI";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import stageReducer from "./reducers/stageQuizReducer";
import dataQuizReducer from "./reducers/dataQuizReducer";
import answersInfoReducer from "./reducers/answersInfoReducer";
import categoriesReducer from "./reducers/categoriesReducer";

export const store = configureStore({
     reducer: {
          [quizApi.reducerPath]: quizApi.reducer,
          stageReducer,
          dataQuizReducer,
          answersInfoReducer,
          categoriesReducer,
          settingsQuizReducer
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(quizApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
