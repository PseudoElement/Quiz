import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
     pageNumber: number;
}

const initialState: IInitialState = {
     pageNumber: 0,
};

const stageReducer = createSlice({
     name: "start",
     initialState,
     reducers: {

          changePage(state) {
               state.pageNumber += 1;
          },
          setFirstPage(state) {
               state.pageNumber = 0;
          },
     },
});

export const {  changePage, setFirstPage } = stageReducer.actions;
export default stageReducer.reducer;
