import React from 'react';

const AnswersList = ({answers}:any) => {

    console.log(answers)

    return (
        <div>
            {answers.map((answer: any)=> <li>{answer}</li>)}
        </div>
    );
};

export default AnswersList;