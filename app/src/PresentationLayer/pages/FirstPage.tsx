import React from "react";
import { useNavigate } from "react-router-dom";
import RadioList from "../components/firstPage/RadioList";
import SelectCustom from "../components/firstPage/SelectCustom";
import { useAppSelector, useAppDispatch } from "../../BLL/redux/hooks/typesHook";
import "./styles/FirstPageStyles.css";
import { fetchQuestions } from "../../BLL/redux/hooks/fetchQuestions";
import { Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InputNumber from "../components/firstPage/InputNumber";
import { difficultyData } from "./data/difficultyRadioData";
import BackDropWrap from "../components/firstPage/BackDropWrap";
import { setCategories } from "../../BLL/redux/hooks/setCategories";
import { fetchCategoryIdArr } from "../../BLL/redux/hooks/fetchCategoryIdArr";
import { setError } from "../../BLL/redux/reducers/dataQuizReducer";
import ErrorAlert from "../components/firstPage/ErrorAlert";

const FirstPage = () => {
     const dispatch = useAppDispatch();
     const {
          category,
          difficulty,
          amountOfQuestions,
          isValidCount,
     } = useAppSelector((state) => state.settingsQuizReducer);
     const { isLoading, error } = useAppSelector(
          (state) => state.dataQuizReducer
     );
     const categoriesData = useAppSelector(
          (state) => state.categoriesReducer.categoriesData
     );

     const [isFetchedCategoryId, setIsFetchCategoryId] = React.useState(false);

     const navigate = useNavigate();

     const start = async () => {
          if (!isValidCount) {
               dispatch(
                    setError(
                         "Choose correct options."
                    )
               );
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

     React.useMemo(async () => {
          await dispatch(fetchCategoryIdArr());
          setIsFetchCategoryId(true);
     }, []);

     React.useEffect(() => {
          if (!isFetchedCategoryId) return;
          dispatch(setCategories());
     }, [isFetchedCategoryId]);

     return (
          <div className="firstPage">
               {isLoading && <BackDropWrap />}
               <RadioList
                    h2Title="Set difficulty:"
                    defaultValue={"easy"}
                    radioData={difficultyData}
               />
               <SelectCustom
                    h2Title="Choose category:"
                    selectTitle="Category"
                    selectsData={categoriesData}
               />
               <InputNumber
                    label="Amount"
                    h2Title="Choose amount of questions:"
                    type="number"
               />
               {error && <ErrorAlert/>}
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
