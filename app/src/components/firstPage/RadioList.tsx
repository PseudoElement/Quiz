import React from "react";
import { RadioGroup, FormControlLabel, FormControl, FormLabel, Radio } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/typesHook";
import { setDifficulty } from "../../store/reducers/settingsQuizReducer";

interface IRadioListProps {
     defaultValue: string;
     radioData: Record<string, string>[];
     h2Title: string;
}

const RadioList = ({ defaultValue, radioData, h2Title }: IRadioListProps) => {
     const dispatch = useAppDispatch();
     const difficulty = useAppSelector((state) => state.settingsQuizReducer.difficulty);

     return (
          <div className="optionWrapper first">
               <h2>{h2Title}</h2>
               <FormControl className="radio-group">
                    <RadioGroup
                         aria-labelledby="demo-radio-buttons-group-label"
                         defaultValue={defaultValue}
                         name="radio-buttons-group"
                         onChange={(e: any) => dispatch(setDifficulty(e.target.value))}
                    >
                         {radioData.map(({ label, value }) => (
                              <FormControlLabel checked={value === difficulty} key={value} value={value} control={<Radio />} label={label} />
                         ))}
                    </RadioGroup>
               </FormControl>
          </div>
     );
};

export default RadioList;
