import React from "react";
import AnswerResult from "../components/resultsPage/AnswerResult";
import ButtonRestart from "../components/resultsPage/ButtonRestart";
import "./styles/ResultPageStyles.css";
import { useAppSelector } from "../shared/hooks/typesHook";
import Layout from "../components/layout/Layout";

const ResultsPage = () => {
     const answersInfo = useAppSelector((state) => state.answersInfoReducer.answersInfo);

     const totalAnswers = answersInfo.length;

     const correctAnswers = answersInfo.reduce((acc, el) => {
          el.isCorrectChoice && ++acc;
          return acc;
     }, 0);

     const percentCorrectAnswers = parseFloat(((+correctAnswers / +totalAnswers) * 100).toFixed(1));

     const setResultColor = () => {
          let color = "";
          color = percentCorrectAnswers > 75 ? "green" : percentCorrectAnswers > 40 ? "goldenrod" : "crimson";
          return color;
     };

     return (
          <Layout>
               <div className="resultsPage">
                    <h2>RESULTS</h2>
                    <h2>
                         <span>Correct answers: </span>
                         <span
                              style={{
                                   fontStyle: "oblique",
                                   marginTop: 20,
                                   color: setResultColor(),
                              }}
                         >
                              {`${correctAnswers}/${totalAnswers} (${percentCorrectAnswers}%)`}{" "}
                         </span>
                    </h2>
                    <>
                         {answersInfo.map((answer, index) => (
                              <AnswerResult key={index} answer={answer} index={index} />
                         ))}
                    </>
                    <ButtonRestart />
               </div>
          </Layout>
     );
};

export default ResultsPage;
