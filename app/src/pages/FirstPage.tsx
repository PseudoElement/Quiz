import React from "react";
import { useNavigate } from "react-router-dom";
import RadioList from "../components/firstPage/RadioList";
import SelectCustom from "../components/firstPage/SelectCustom";
import { quizApi } from "../redux/API/quizAPI";
import {
     setData,
     setError,
     setIsLoading,
} from "../redux/reducers/dataQuizReducer";
import { useAppDispatch, useAppSelector } from "../redux/hooks/typesHook";
import { selectsData } from "./data/selectsData";
import "./styles/FirstPageStyles.css";
import { setAmountOfQuestions } from "../redux/reducers/settingsQuizReducer";
import { fetchUsers } from "../redux/hooks/fetchQuestions";
import { Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InputNumber from "../components/firstPage/InputNumber";
import { difficultyData } from "./data/difficultyRadioData";
import BackDropWrap from "../components/firstPage/BackDropWrap";

const FirstPage = () => {
     const dispatch = useAppDispatch();
     const { category, difficulty, amountOfQuestions } = useAppSelector(
          (state) => state.settingsQuizReducer
     );
     const { isLoading } = useAppSelector((state) => state.dataQuizReducer);
     const navigate = useNavigate();

     const start = async () => {
          await dispatch(
               fetchUsers({
                    category,
                    difficulty,
                    amountOfQuestions,
               })
          );
          navigate("/quiz", { replace: true });
     };

     return (
          <div className="firstPage">
               {isLoading && <BackDropWrap/>}
               <RadioList
                    h2Title="Set difficulty:"
                    defaultValue={"easy"}
                    radioData={difficultyData}
               />
               <SelectCustom
                    h2Title="Choose category:"
                    selectTitle="Category"
                    selectsData={selectsData}
               />
               <InputNumber
                    label="Amount"
                    h2Title="Choose amount of questions:"
                    type="number"
               />
               <Button
                    size="large"
                    variant="contained"
                    onClick={() => start()}
                    endIcon={<PlayCircleOutlineIcon fontSize="large" />}
               >
                    Start
               </Button>
          </div>
     );
};

export default FirstPage;
