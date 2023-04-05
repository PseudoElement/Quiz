import { addMaxQuestionCount, Category } from "../../store/reducers/categoriesReducer";
import { fetchMockQuestionCount, QuestionCountResponse } from "./fetchMockQuestionCount";
import { AppDispatch } from "../../store/store";

export const setCategories = () => async (dispatch: AppDispatch, getState: any) => {
     const categoriesData = getState().categoriesReducer.categoriesData;
     const response: QuestionCountResponse = await fetchMockQuestionCount();
     await categoriesData.forEach((category: Category) =>
          dispatch(addMaxQuestionCount(response.find((el) => el.category_id === category.id)))
     );
};
