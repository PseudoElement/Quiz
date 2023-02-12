import React from "react";
import { IAnswerInfo } from "../../../BLL/redux/reducers/answersInfoReducer";

const AnswerResult = ({
     answer,
     index,
}: {
     answer: IAnswerInfo;
     index: number;
}) => {

     return (
          <div className="answerResult">
               <h2>
                    {index + 1}. {answer.question}
               </h2>
               {answer.isCorrectChoice ? (
                    <div style={{ color: "green" }} className="choosedAnswer">
                         Your answer: {answer.correctAnswer}
                    </div>
               ) : (
                    <>
                         <div
                              style={{ color: "red" }}
                              className="choosedAnswer"
                         >
                              Your answer: {answer.choosedAnswer}
                         </div>
                         <div className="correctAnswer">
                              Correct answer: {answer.correctAnswer}
                         </div>
                    </>
               )}
          </div>
     );
};

export default AnswerResult;
