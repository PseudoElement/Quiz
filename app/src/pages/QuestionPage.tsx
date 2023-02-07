import React from "react";
import { Link } from "react-router-dom";
import { finishQuiz } from "../redux/reducers/stageQuizReducer";
import { useAppDispatch } from "../redux/typesHook";

const QuestionPage = () => {
     const dispatch = useAppDispatch();

     return (
          <div>
               QUESTION
               <Link to={"/results"}>
                    <button onClick={() => dispatch(finishQuiz())}>
                         Finish
                    </button>
               </Link>
          </div>
     );
};

export default QuestionPage;
