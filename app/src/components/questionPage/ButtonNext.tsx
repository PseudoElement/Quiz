import React from "react";
import { useAppDispatch } from "../../redux/hooks/typesHook";
import {
     changePage,
     setFirstPage,
} from "../../redux/reducers/stageQuizReducer";
import {
     addAnswer,
     IAnswerInfo,
} from "../../redux/reducers/answersInfoReducer";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FinishIcon from "./FinishIcon";

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
               endIcon={type === "next" ? <ArrowForwardIosIcon/> : <FinishIcon/>}
          >
               {type === "next" ? "Next" : "Show results"}
          </Button>
     );
};

export default ButtonNext;
