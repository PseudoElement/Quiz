import { AppDispatch } from "../../store/store";
import axios from "axios";
import { setIsLoading, setError } from "../../store/reducers/dataQuizReducer";
import { setCategoriesData } from "../../store/reducers/categoriesReducer";

export const fetchCategoryIdArr = () => async (dispatch: AppDispatch) => {
     try {
          dispatch(setIsLoading(true));
          const response: any = await axios.get("https://opentdb.com/api_category.php");
          response.data.trivia_categories.unshift({ id: 0, name: "Any" });
          dispatch(setCategoriesData(response.data.trivia_categories));
     } catch (e: any) {
          dispatch(setIsLoading(true));
          dispatch(setError(e.message));
     } finally {
          dispatch(setIsLoading(false));
     }
};
