import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import uuid from "uuid-random";

interface AnswersListProps {
     choosedAnswer: string;
     answers: Array<string>;
     setChoosedAnswer: React.Dispatch<React.SetStateAction<string>>;
}

const AnswersList = ({ answers, setChoosedAnswer, choosedAnswer }: AnswersListProps) => {
     const sortedAnswers = answers.sort((a: any, b: any) => (a > b ? 1 : a < b ? -1 : 0));

     return (
          <div>
               <FormControl className="radio-group">
                    <RadioGroup
                         aria-labelledby="demo-radio-buttons-group-label"
                         defaultValue={sortedAnswers[0]}
                         name="radio-buttons-group"
                         onChange={(e: any) => setChoosedAnswer(e.target.value)}
                    >
                         {sortedAnswers.map((answer) => (
                              <FormControlLabel checked={answer === choosedAnswer} key={uuid()} value={answer} control={<Radio />} label={answer} />
                         ))}
                    </RadioGroup>
               </FormControl>
          </div>
     );
};

export default AnswersList;
