import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useAppDispatch } from "../../redux/hooks/typesHook";
import { setCategory } from "../../redux/reducers/settingsQuizReducer";

interface ISelectCustomProps {
     selectsData: Array<Record<string, string | number>>;
     selectTitle: string;
     h2Title: string;
}

const SelectCustom = ({ selectsData, selectTitle, h2Title }: ISelectCustomProps) => {
     const dispatch = useAppDispatch();

     return (
          <div className="optionWrapper">
               <h2>{h2Title}</h2>
               <FormControl className="inputWrapper">
                    <InputLabel id="select-title-label">
                         {selectTitle}
                    </InputLabel>
                    <Select
                         defaultValue={0}
                         labelId="select-title-label"
                         id="demo-simple-select"
                         label="Age"
                         onChange={(e) => dispatch(setCategory(e.target.value))}
                    >
                         {selectsData.map(({ text, value }) => (
                              <MenuItem key={value} value={value}>
                                   {text}
                              </MenuItem>
                         ))}
                    </Select>
               </FormControl>
          </div>
     );
};

export default SelectCustom;
