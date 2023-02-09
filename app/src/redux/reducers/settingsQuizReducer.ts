import { ISettings } from './../API/quizAPI';
import { createSlice } from "@reduxjs/toolkit";


const initialState: ISettings = {
     difficulty: "easy",
     amountOfQuestions: 10,
     category: 0,
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
     },
});

export const { setAmountOfQuestions, setDifficulty, setCategory } =
     settingsQuizReducer.actions;
export default settingsQuizReducer.reducer;
