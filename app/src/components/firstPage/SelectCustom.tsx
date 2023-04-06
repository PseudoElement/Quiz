import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import uuid from "uuid-random";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/typesHook";
import { setCategory, setMaxQuestionsCount } from "../../store/reducers/settingsQuizReducer";
import { useCategories } from "../../shared/hooks/useCategories";

interface ISelectCustomProps {
     selectTitle: string;
     h2Title: string;
}

const SelectCustom = ({ selectTitle, h2Title }: ISelectCustomProps) => {
     const dispatch = useAppDispatch();
     const { categoriesNameID } = useCategories();

     const { difficulty, category } = useAppSelector((state) => state.settingsQuizReducer);
     const categoriesData = useAppSelector((state) => state.categoriesReducer.categoriesData);

     const selectHandler = (value: number) => {
          if (value || value === 0) {
               dispatch(setCategory(value));
          }
     };

     React.useEffect(() => {
          dispatch(
               setMaxQuestionsCount(
                    (function () {
                         let value: number | undefined;
                         const foundCategory = categoriesData.find((el) => el.category_id === category);
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
                         defaultValue={categoriesNameID?.length ? `0` : ""}
                         labelId="select-title-label"
                         id="demo-simple-select"
                         label="Age"
                         onChange={(e) => selectHandler(+e.target.value)}
                    >
                         {categoriesNameID?.map(({ id, name }: any) => (
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
