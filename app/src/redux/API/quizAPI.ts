import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IParams {
     difficulty: string;
     category: number;
     amount: number;
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
          getQuestion: build.query<IResponse, IParams>({
               query: ({ difficulty, category, amount }) => ({
                    url: `/api.php?`,
                    params: {
                         amount: amount,
                         category: category,
                         difficulty: difficulty,
                    },
               }),
          }),
     }),
});
