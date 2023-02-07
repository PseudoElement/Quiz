import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
     isFirstPage: boolean;
     isQuiz: boolean;
     amountOfQuestions: number;
}

const initialState: IInitialState = {
     isFirstPage: true,
     isQuiz: false,
     amountOfQuestions: 10,
};

export const stageReducer = createSlice({
     name: "start",
     initialState,
     reducers: {
          startQuiz(state) {
               state.isFirstPage = false;
               state.isQuiz = true;
          },
          finishQuiz(state) {
               state.isQuiz = false;
          },
          restartQuiz(state) {
               state.isFirstPage = true;
          },
          setAmountOfQuestions(state, action){
               state.amountOfQuestions = action.payload;
          }
     },
});

export const { finishQuiz, startQuiz, restartQuiz } = stageReducer.actions;
export default stageReducer.reducer;
