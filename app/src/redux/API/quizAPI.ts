import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ISettings {
     difficulty: string;
     category:  string | number;
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

export const quizApi = createApi({
     reducerPath: "quizApi",
     baseQuery: fetchBaseQuery({
          baseUrl: "https://opentdb.com",
     }),
     endpoints: (build) => ({
          getQuestions: build.query<IResponse, ISettings>({
               query: ({ difficulty, category, amountOfQuestions }) => ({
                    url: `/api.php?`,
                    params: {
                         amount: amountOfQuestions,
                         category: category,
                         difficulty: difficulty,
                    },
               }),
          }),
     }),
});
