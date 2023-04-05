import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import uuid from "uuid-random";
import { Category } from "../../store/reducers/categoriesReducer";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/typesHook";
import { setCategory, setMaxQuestionsCount } from "../../store/reducers/settingsQuizReducer";

interface ISelectCustomProps {
     selectsData: Array<Category>;
     selectTitle: string;
     h2Title: string;
}

const SelectCustom = ({ selectsData, selectTitle, h2Title }: ISelectCustomProps) => {
     const dispatch = useAppDispatch();

     const { difficulty, category } = useAppSelector((state) => state.settingsQuizReducer);
     const categoriesData = useAppSelector((state) => state.categoriesReducer.categoriesData);

     const selectHandler = (value: any) => {
          if (value || value === 0) {
               dispatch(setCategory(value));
          }
     };

     React.useEffect(() => {
          dispatch(
               setMaxQuestionsCount(
                    (function () {
                         let value: number | undefined;
                         const foundCategory = categoriesData.find((el) => el.id === category);
                         switch (difficulty) {
                              case "easy":
                                   value = foundCategory?.category_question_count?.total_easy_question_count;
                                   return value;
                              case "medium":
                                   value = foundCategory?.category_question_count?.total_medium_question_count;
                                   return value;
                              case "hard":
                                   value = foundCategory?.category_question_count?.total_hard_question_count;
                                   return value;
                         }
                    })() || 50
               )
          );
     }, [difficulty, category]);

     return (
          <div className="optionWrapper">
               <h2>{h2Title}</h2>
               <FormControl className="inputWrapper">
                    <InputLabel id="select-title-label">{selectTitle}</InputLabel>
                    <Select
                         className="selectsWrapper"
                         defaultValue={selectsData?.length ? `0` : ""}
                         labelId="select-title-label"
                         id="demo-simple-select"
                         label="Age"
                         onChange={(e) => selectHandler(e.target.value)}
                    >
                         {selectsData?.map(({ id, name }: any) => (
                              <MenuItem key={uuid()} value={id}>
                                   {name}
                              </MenuItem>
                         ))}
                    </Select>
               </FormControl>
          </div>
     );
};

export default SelectCustom;
