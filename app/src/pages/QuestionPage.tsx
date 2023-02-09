import React from "react";
import { Link } from "react-router-dom";
import AnswersList from "../components/questionPage/AnswersList";
import QuestionTitle from "../components/questionPage/QuestionTitle";
import { quizApi } from "../redux/API/quizAPI";
import { changePage, setFirstPage } from "../redux/reducers/stageQuizReducer";
import { useAppDispatch, useAppSelector } from "../redux/hooks/typesHook";
import uuid from "uuid-random";
import { addAnswer } from "../redux/reducers/answersInfoReducer";

const QuestionPage = () => {
     const dispatch = useAppDispatch();

     const { data, error, isLoading } = useAppSelector(
          (state) => state.dataQuizReducer
     );
     const { pageNumber } = useAppSelector((state) => state.stageReducer);
     const { amountOfQuestions } = useAppSelector(
          (state) => state.settingsQuizReducer
     );

     const answersInfo = useAppSelector(
          (state) => state.answersInfoReducer.answersInfo
     );

     const [choosedAnswer, setChoosedAnswer] = React.useState<string>("");

     const goToNext = () => {
          dispatch(changePage());
          dispatch(
               addAnswer({
                    question: data[pageNumber].question,
                    correctAnswer: data[pageNumber].correct_answer,
                    choosedAnswer: choosedAnswer,
                    isCorrectChoice:
                         data[pageNumber].correct_answer === choosedAnswer,
               })
          );
     };

     const finishQuiz = () => {
          dispatch(setFirstPage());
          dispatch(
               addAnswer({
                    question: data[pageNumber].question,
                    correctAnswer: data[pageNumber].correct_answer,
                    choosedAnswer: choosedAnswer,
                    isCorrectChoice:
                         data[pageNumber].correct_answer === choosedAnswer,
               })
          );
     };

     React.useEffect(() => {
          console.log(answersInfo);
     }, [answersInfo]);
     return (
          <div>
               QUESTION
               <h1>PAGE: {pageNumber + 1}</h1>
               {isLoading && <h1>Wait...</h1>}
               {error && <h1>{error}</h1>}
               {data && (
                    <div key={uuid()}>
                         <QuestionTitle question={data[pageNumber].question} />
                         <AnswersList
                              setChoosedAnswer={setChoosedAnswer}
                              answers={[
                                   ...data[pageNumber].incorrect_answers,
                                   data[pageNumber].correct_answer,
                              ]}
                         />
                    </div>
               )}
               {+amountOfQuestions === pageNumber + 1 ? (
                    <Link to={"/results"}>
                         <button onClick={() => finishQuiz()}>Finish</button>
                    </Link>
               ) : (
                    <button onClick={() => goToNext()}>Next</button>
               )}
          </div>
     );
};

export default QuestionPage;
