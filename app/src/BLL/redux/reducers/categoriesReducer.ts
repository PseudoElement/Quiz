import { createSlice } from "@reduxjs/toolkit";

export interface Category {
     id: number | string;
     name: string;
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
          addMaxQuestionCount(state, action) {
               state.categoriesData = state.categoriesData.map((category) =>
                    category.id === action.payload.category_id
                         ? {
                                ...category,
                                category_question_count:
                                     action.payload.category_question_count,
                           }
                         : { ...category }
               );
          },
     },
});

export const { setCategoriesData, addMaxQuestionCount } = categoriesReducer.actions;
export default categoriesReducer.reducer;
