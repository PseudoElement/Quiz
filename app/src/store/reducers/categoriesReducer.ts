import { createSlice } from "@reduxjs/toolkit";

export interface Category {
     category_id: number | string;
     category_question_count?: {
          total_question_count: number;
          total_easy_question_count: number;
          total_medium_question_count: number;
          total_hard_question_count: number;
     };
}

interface ICategories {
     categoriesData: Array<Category>;
}
const initialState: ICategories = {
     categoriesData: [],
};

const categoriesReducer = createSlice({
     name: "categoriesData",
     initialState,
     reducers: {
          setCategoriesData(state, action) {
               state.categoriesData = action.payload;
          },
     },
});

export const { setCategoriesData } = categoriesReducer.actions;
export default categoriesReducer.reducer;
