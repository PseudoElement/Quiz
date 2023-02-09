import React from "react";
import { TextField } from "@mui/material";
import { useAppDispatch } from "../../redux/hooks/typesHook";
import { setAmountOfQuestions } from "../../redux/reducers/settingsQuizReducer";

type InputNumberProps = Record<string, string>;

const InputNumber = ({ label, h2Title, type }: InputNumberProps) => {
     const dispatch = useAppDispatch();

     const [isCorrectValue, setIsCorrectValue] = React.useState(true);

     const validateNumber = (value: string) => {
          if (+value > 50 || +value < 5) {
               setIsCorrectValue(false);
               return;
          }
          setIsCorrectValue(true);
          dispatch(setAmountOfQuestions(value));
     };
     return (
          <div>
               <h2>{h2Title}</h2>
               <TextField
                    inputProps={{ min: 5, max: 50 }}
                    FormHelperTextProps={{
                         style: { color: isCorrectValue ? "gray" : "red" },
                    }}
                    helperText="Min: 5, max: 50"
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
