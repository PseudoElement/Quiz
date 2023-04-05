import React from "react";

import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FinishIcon from "./FinishIcon";
import { IAnswerInfo, addAnswer } from "../../store/reducers/answersInfoReducer";
import { useAppDispatch } from "../../shared/hooks/typesHook";
import { changePage, setFirstPage } from "../../store/reducers/stageQuizReducer";

interface ButtonNextProps {
     answerData: IAnswerInfo;
     type: "next" | "finish";
}

const ButtonNext = ({ type, answerData }: ButtonNextProps) => {
     const dispatch = useAppDispatch();
     const navigate = useNavigate();

     const goToNext = () => {
          dispatch(changePage());
          dispatch(addAnswer(answerData));
     };

     const finishQuiz = () => {
          dispatch(setFirstPage());
          dispatch(addAnswer(answerData));
          navigate("/results");
     };
     return (
          <Button
               onClick={() => (type === "next" ? goToNext() : finishQuiz())}
               variant="contained"
               endIcon={type === "next" ? <ArrowForwardIosIcon /> : <FinishIcon />}
          >
               {type === "next" ? "Next" : "Show results"}
          </Button>
     );
};

export default ButtonNext;
