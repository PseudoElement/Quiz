import { AppDispatch } from "../../store/store";
import { setError, setIsLoading, setData } from "../../store/reducers/dataQuizReducer";
import axios from "axios";
import { decodeText } from "../utils/decodeText";
import { ISettings } from "../interfaces/interfaces";

export const fetchQuestions =
     ({ amountOfQuestions = 5, category = 0, difficulty = "easy" }: ISettings) =>
     async (dispatch: AppDispatch) => {
          try {
               dispatch(setIsLoading(true));
               const response =
                    category === "0"
                         ? await axios.get(
                                `https://opentdb.com/api.php?amount=${amountOfQuestions}&difficulty=${difficulty}`
                           )
                         : await axios.get(
                                `https://opentdb.com/api.php?amount=${amountOfQuestions}&category=${category}&difficulty=${difficulty}`
                           );
               response.data.results.forEach((question: any) => {
                    question.correct_answer = decodeText(question.correct_answer);
                    question.question = decodeText(question.question);
                    question.incorrect_answers.forEach((answer: any) => (answer = decodeText(answer)));
               });
               dispatch(setData(response.data.results));
          } catch (e: any) {
               dispatch(setIsLoading(true));
               dispatch(setError(e.message));
          } finally {
               dispatch(setIsLoading(false));
          }
     };
