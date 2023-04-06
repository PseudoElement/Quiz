export interface ISettings {
     difficulty: string;
     category: string | number;
     amountOfQuestions: string | number;
}

export interface IQuestion {
     category: string;
     type: string;
     difficulty: string;
     question: string;
     correct_answer: string;
     incorrect_answers: string[];
     id?: string;
}

export interface IResponse {
     response_code: number;
     results: IQuestion[];
}
export interface ICategoryID {
     name: string;
     id: number;
}
