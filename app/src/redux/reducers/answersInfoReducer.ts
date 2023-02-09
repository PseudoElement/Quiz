import { createSlice } from "@reduxjs/toolkit";

interface IAnswerInfo{
    question: string;
    correctAnswer: string;
    choosedAnswer: string;
    isCorrectChoice: boolean;
}

const initialState: {answersInfo: IAnswerInfo[]} = {
     answersInfo: [],
};

const answersInfoReducer = createSlice({
     name: "answersInfo",
     initialState,
     reducers: {
          addAnswer(state, action) {
               state.answersInfo = [...state.answersInfo, action.payload];
          },
          clearAnswersInfo(state) {
               state.answersInfo = [];
          },
     },
});

export const { addAnswer, clearAnswersInfo } = answersInfoReducer.actions;
export default answersInfoReducer.reducer;