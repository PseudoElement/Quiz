import { IQuestion } from "../interfaces/interfaces";

export function decodeText(str: string): string {
     var txt = document.createElement("textarea");
     txt.innerHTML = str;
     return txt.value;
}
export function decodeQuestionObject(question: IQuestion) {
     question.correct_answer = decodeText(question.correct_answer);
     question.question = decodeText(question.question);
     question.incorrect_answers.forEach((answer) => (answer = decodeText(answer)));
}
