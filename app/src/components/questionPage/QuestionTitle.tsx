import React from 'react';
import { replaceQuotes } from '../../utils/replaceQuotes';

const QuestionTitle = ({question}: any) => {
    
    // question = replaceQuotes(question);
    return (
        <div>
            {question}
        </div>
    );
};

export default QuestionTitle;