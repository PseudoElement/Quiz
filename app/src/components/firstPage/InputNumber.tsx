import React from "react";
import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/typesHook";
import { setAmountOfQuestions, setIsValidCount } from "../../store/reducers/settingsQuizReducer";

type InputNumberProps = Record<string, string>;

const InputNumber = ({ label, h2Title, type }: InputNumberProps) => {
     const dispatch = useAppDispatch();

     const { maxQuestionsCount, isValidCount } = useAppSelector((state) => state.settingsQuizReducer);

     const [isFirstRender, setIsFirstRender] = React.useState(true);

     const validateNumber = (value: string) => {
          if (+value > maxQuestionsCount! || +value < 5) {
               dispatch(setIsValidCount(false));
               return;
          }
          setIsFirstRender(false);
          dispatch(setIsValidCount(true));
          dispatch(setAmountOfQuestions(+value > 50 ? 50 : +value));
     };
     return (
          <div className="optionWrapper">
               <h2>{h2Title}</h2>
               <TextField
                    className="inputWrapper"
                    inputProps={{ min: 5, max: maxQuestionsCount }}
                    FormHelperTextProps={{
                         style: { color: isValidCount || isFirstRender ? "gray" : "red" },
                    }}
                    helperText={`Min: 5, max: ${maxQuestionsCount! > 50 ? 50 : maxQuestionsCount}`}
                    onInput={(e: any) => validateNumber(e.target.value)}
                    id="outlined-basic"
                    label={label}
                    variant="outlined"
                    type={type}
               />
          </div>
     );
};

export default InputNumber;
