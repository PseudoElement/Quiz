import React from "react";
import uuid from "uuid-random";

interface AnswersListProps {
     answers: Array<string>;
     setChoosedAnswer: React.Dispatch<React.SetStateAction<string>>;
}

const AnswersList = ({ answers, setChoosedAnswer }: AnswersListProps) => {
     return (
          <div>
               {answers
                    .sort((a: any, b: any) => (a > b ? 1 : a < b ? -1 : 0))
                    .map((answer: any) => (
                         <li key={uuid()}>{answer}</li>
                    ))}
          </div>
     );
};

export default AnswersList;
