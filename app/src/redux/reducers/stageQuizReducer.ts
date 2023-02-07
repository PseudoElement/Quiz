import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
     amountOfQuestions: number;
     pageNumber: number;
}

const initialState: IInitialState = {
     amountOfQuestions: 5,
     pageNumber: 1,
};

export const stageReducer = createSlice({
     name: "start",
     initialState,
     reducers: {
          setAmountOfQuestions(state, action) {
               state.amountOfQuestions = action.payload;
          },
          changePage(state) {
               state.pageNumber += 1;
          },
          setFirstPage(state) {
               state.pageNumber = 1;
          },
     },
});

export const { setAmountOfQuestions, changePage, setFirstPage } = stageReducer.actions;
export default stageReducer.reducer;
