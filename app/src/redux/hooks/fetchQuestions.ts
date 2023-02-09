import { AppDispatch } from "./../store";
import { ISettings } from "./../API/quizAPI";
import { setError, setIsLoading, setData } from "../reducers/dataQuizReducer";
import axios from "axios";
import { replaceQuotes } from "../../utils/replaceQuotes";

export const fetchUsers =
     ({
          amountOfQuestions = 10,
          category = 0,
          difficulty = "easy",
     }: ISettings) =>
     async (dispatch: AppDispatch) => {
          try {
               dispatch(setIsLoading(true));
               const response =
                    category === 0
                         ? await axios.get(
                                `https://opentdb.com/api.php?amount=${amountOfQuestions}&difficulty=${difficulty}`
                           )
                         : await axios.get(
                                `https://opentdb.com/api.php?amount=${amountOfQuestions}&category=${category}&difficulty=${difficulty}`
                           );
               response.data.results.forEach((question: any) => {
                    question.correct_answer = replaceQuotes(
                         question.correct_answer
                    );
                    question.question = replaceQuotes(question.question);
                    question.incorrect_answers.forEach(
                         (answer: any) => (answer = replaceQuotes(answer))
                    );
               });
               console.log(response.data.results);
               dispatch(setData(response.data.results));
          } catch (e: any) {
               dispatch(setIsLoading(true));
               dispatch(setError(e.message));
          } finally {
               dispatch(setIsLoading(false));
          }
     };
