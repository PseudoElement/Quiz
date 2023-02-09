import React from "react";
import {
     RadioGroup,
     FormControlLabel,
     FormControl,
     FormLabel,
     Radio,
} from "@mui/material";
import { useAppDispatch } from "../../redux/hooks/typesHook";
import { setDifficulty } from "../../redux/reducers/settingsQuizReducer";

interface IRadioDataProps {
     label: string;
     value: string;
}

interface IRadioListProps {
     radioGroupName: string;
     defaultValue: string;
     radioData: IRadioDataProps[];
}

const RadioList = ({
     radioGroupName,
     defaultValue,
     radioData,
}: IRadioListProps) => {
     const dispatch = useAppDispatch();

     return (
          <div>
               <h2>Set difficulty</h2>
<FormControl className="radio-group">
               <FormLabel
                    className="radio-group-title"
                    id="demo-radio-buttons-group-label"
               >
                    {radioGroupName}
               </FormLabel>
               <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={defaultValue}
                    name="radio-buttons-group"
                    onChange={(e: any) =>
                         dispatch(setDifficulty(e.target.value))
                    }
               >
                    {radioData.map(({ label, value }) => (
                         <FormControlLabel
                              key={value}
                              value={value}
                              control={<Radio />}
                              label={label}
                         />
                    ))}
               </RadioGroup>
          </FormControl>
          </div>
        
     );
};

export default RadioList;
