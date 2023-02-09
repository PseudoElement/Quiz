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

const FirstPage = () => {
     const dispatch = useAppDispatch();
     const { category, difficulty, amountOfQuestions } = useAppSelector(
          (state) => state.settingsQuizReducer
     );
     const { data } = useAppSelector((state) => state.dataQuizReducer);
     const navigate = useNavigate();

     const start = async () => {
          await dispatch(
               fetchUsers({
                    category,
                    difficulty,
                    amountOfQuestions,
               })
          );
          setTimeout(() => {
               navigate("/quiz", { replace: true });
          }, 1000);
     };

     return (
          <div className="firstPage">
               <RadioList
                    radioGroupName={"Difficulty"}
                    defaultValue={"easy"}
                    radioData={[
                         { value: "easy", label: "Easy" },
                         { value: "medium", label: "Medium" },
                         { value: "hard", label: "Hard" },
                    ]}
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
