import React from "react";
import AnswersList from "../components/questionPage/AnswersList";
import QuestionTitle from "../components/questionPage/QuestionTitle";
import { useAppSelector } from "../redux/hooks/typesHook";
import uuid from "uuid-random";
import ButtonNext from "../components/questionPage/ButtonNext";
import "./styles/QuestionPageStyles.css";

const QuestionPage = () => {
     const { data, error } = useAppSelector((state) => state.dataQuizReducer);
     const { pageNumber } = useAppSelector((state) => state.stageReducer);
     const { amountOfQuestions } = useAppSelector(
          (state) => state.settingsQuizReducer
     );

     const answersInfo = useAppSelector(
          (state) => state.answersInfoReducer.answersInfo
     );

     const [choosedAnswer, setChoosedAnswer] = React.useState<string>("");

     return (
          <div className="questionPage">
               <h2 className="questionPage-h2">QUESTION: {pageNumber + 1}</h2>
               {error && <h1>{error}</h1>}
               {data && (
                    <div className="questionPage-question" key={uuid()}>
                         <QuestionTitle question={data[pageNumber].question} />
                         <AnswersList
                              choosedAnswer={choosedAnswer}
                              setChoosedAnswer={setChoosedAnswer}
                              answers={[
                                   ...data[pageNumber].incorrect_answers,
                                   data[pageNumber].correct_answer,
                              ]}
                         />
                    </div>
               )}

               <ButtonNext
                    answerData={{
                         question: data[pageNumber].question,
                         correctAnswer: data[pageNumber].correct_answer,
                         choosedAnswer: choosedAnswer,
                         isCorrectChoice:
                              data[pageNumber].correct_answer === choosedAnswer,
                    }}
                    type={
                         +amountOfQuestions === pageNumber + 1
                              ? "finish"
                              : "next"
                    }
               />
          </div>
     );
};

export default QuestionPage;
