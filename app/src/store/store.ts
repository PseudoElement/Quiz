import settingsQuizReducer from "./reducers/settingsQuizReducer";
import { configureStore } from "@reduxjs/toolkit";
import stageReducer from "./reducers/stageQuizReducer";
import dataQuizReducer from "./reducers/dataQuizReducer";
import answersInfoReducer from "./reducers/answersInfoReducer";
import categoriesReducer from "./reducers/categoriesReducer";

export const store = configureStore({
     reducer: {
          stageReducer,
          dataQuizReducer,
          answersInfoReducer,
          categoriesReducer,
          settingsQuizReducer,
     },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
