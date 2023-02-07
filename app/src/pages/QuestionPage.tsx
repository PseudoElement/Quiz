import React from "react";
import { Link } from "react-router-dom";
import AnswersList from "../components/questionPage/AnswersList";
import QuestionTitle from "../components/questionPage/QuestionTitle";
import { quizApi } from "../redux/API/quizAPI";
import { changePage, setFirstPage } from "../redux/reducers/stageQuizReducer";
import { useAppDispatch, useAppSelector } from "../redux/typesHook";
import uuid from "uuid-random";

const QuestionPage = () => {
     const { amountOfQuestions, pageNumber } = useAppSelector(
          (state) => state.stageReducer
     );
     const dispatch = useAppDispatch();
     const [fetchQuestion, { data, isLoading, error }]: any =
          quizApi.useLazyGetQuestionQuery();

     React.useEffect(() => {
          if (data) {
               console.log(data.results);
          }
     }, [data]);
     React.useEffect(() => {
          fetchQuestion({
               amount: 1,
               category: 11,
               difficulty: "easy",
          });
     }, [pageNumber]);
     return (
          <div>
               QUESTION
               {amountOfQuestions === pageNumber ? (
                    <Link to={"/results"}>
                         <button onClick={() => dispatch(setFirstPage())}>
                              Finish
                         </button>
                    </Link>
               ) : (
                    <button onClick={() => dispatch(changePage())}>Next</button>
               )}
               {isLoading && <h1>Wait...</h1>}
               {data &&
                    data.results.map((question: any) => {
                         return (
                              <div key={uuid()}>
                                   <QuestionTitle
                                        question={question.question}
                                   />
                                   <AnswersList
                                        answers={[
                                             ...question.incorrect_answers,
                                             question.correct_answer,
                                        ]}
                                   />
                              </div>
                         );
                    })}
          </div>
     );
};

export default QuestionPage;
