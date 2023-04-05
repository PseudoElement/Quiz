import { AppDispatch } from "../../store/store";
import { setError, setIsLoading, setData } from "../../store/reducers/dataQuizReducer";
import { decodeQuestionObject, decodeText } from "../utils/decodeText";
import { IQuestion, ISettings } from "../interfaces/interfaces";
import { api, endpoints } from "../api";
import { AxiosResponse } from "axios";

export const fetchQuestions =
     ({ amountOfQuestions = 5, category = 0, difficulty = "easy" }: ISettings) =>
     async (dispatch: AppDispatch) => {
          try {
               dispatch(setIsLoading(true));
               const response: AxiosResponse = await api.get(endpoints.getQuestions, {
                    params: {
                         amount: amountOfQuestions,
                         difficulty: difficulty,
                         category: category || null,
                    },
               });
               const data: IQuestion[] = response.data.results;
               data.forEach((question) => {
                    decodeQuestionObject(question);
               });
               dispatch(setData(response.data.results));
          } catch (e: any) {
               dispatch(setIsLoading(true));
               dispatch(setError(e.message));
          } finally {
               dispatch(setIsLoading(false));
          }
     };
