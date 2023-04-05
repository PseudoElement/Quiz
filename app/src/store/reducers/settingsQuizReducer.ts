import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
     difficulty: string;
     category: string | number;
     amountOfQuestions: string | number;
     maxQuestionsCount: number | undefined;
     isValidCount: boolean;
}

const initialState: IInitialState = {
     difficulty: "easy",
     amountOfQuestions: 0,
     category: 0,
     maxQuestionsCount: 50,
     isValidCount: false,
};

const settingsQuizReducer = createSlice({
     name: "settings",
     initialState,
     reducers: {
          setAmountOfQuestions(state, action) {
               state.amountOfQuestions = action.payload;
          },
          setDifficulty(state, action) {
               state.difficulty = action.payload;
          },
          setCategory(state, action) {
               state.category = action.payload;
          },
          setMaxQuestionsCount(state, action) {
               state.maxQuestionsCount = action.payload;
          },
          setIsValidCount(state, action) {
               state.isValidCount = action.payload;
          },
          clearSettings(state) {
               state.isValidCount = false;
               state.amountOfQuestions = 0;
               state.category = 0;
          },
     },
});

export const { setAmountOfQuestions, setDifficulty, setCategory, setMaxQuestionsCount, setIsValidCount, clearSettings } = settingsQuizReducer.actions;
export default settingsQuizReducer.reducer;
