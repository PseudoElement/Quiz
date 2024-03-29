import React from "react";
import { useNavigate } from "react-router-dom";
import RadioList from "../components/firstPage/RadioList";
import SelectCustom from "../components/firstPage/SelectCustom";
import "./styles/FirstPageStyles.css";
import { Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InputNumber from "../components/firstPage/InputNumber";
import { difficultyData } from "./data/difficultyRadioData";
import BackDropWrap from "../components/firstPage/BackDropWrap";

import ErrorAlert from "../components/firstPage/ErrorAlert";
import { useAppDispatch, useAppSelector } from "../shared/hooks/typesHook";
import { setError } from "../store/reducers/dataQuizReducer";
import { fetchQuestions } from "../shared/hooks/fetchQuestions";
import Layout from "../components/layout/Layout";

const FirstPage = () => {
     const dispatch = useAppDispatch();
     const { category, difficulty, amountOfQuestions, isValidCount } = useAppSelector((state) => state.settingsQuizReducer);
     const { isLoading, error } = useAppSelector((state) => state.dataQuizReducer);

     const navigate = useNavigate();

     const start = async () => {
          if (!isValidCount) {
               dispatch(setError("Choose correct options."));
               return;
          }
          dispatch(setError(""));
          await dispatch(
               fetchQuestions({
                    category,
                    difficulty,
                    amountOfQuestions,
               })
          );
          navigate("/quiz", { replace: true });
     };

     return (
          <Layout>
               <div className="firstPage">
                    {isLoading && <BackDropWrap />}
                    <RadioList h2Title="Set difficulty:" defaultValue={"easy"} radioData={difficultyData} />
                    <SelectCustom h2Title="Choose category:" selectTitle="Category" />
                    <InputNumber label="Amount" h2Title="Choose amount of questions:" type="number" />
                    {error && <ErrorAlert />}
                    <Button size="large" variant="contained" onClick={() => start()} endIcon={<PlayCircleOutlineIcon fontSize="large" />}>
                         Start
                    </Button>
               </div>
          </Layout>
     );
};

export default FirstPage;
