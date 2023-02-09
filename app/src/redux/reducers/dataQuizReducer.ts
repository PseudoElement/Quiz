import { createSlice } from "@reduxjs/toolkit";
import { IQuestion } from "../API/quizAPI";

interface IDataInitialState {
     data: IQuestion[];
     isLoading: boolean;
     error: string;
}

const initialState: IDataInitialState = {
     data: [],
     isLoading: false,
     error: "",
};

const dataQuizReducer = createSlice({
     name: "dataUnique",
     initialState,
     reducers: {
          setData(state, action) {
               state.data = action.payload;
          },
          setError(state, action) {
               state.error = action.payload;
          },
          setIsLoading(state, action) {
               state.isLoading = action.payload;
          },
     },
});

export const { setData, setIsLoading, setError } = dataQuizReducer.actions;
export default dataQuizReducer.reducer;
