import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const quizApi = createApi({
    reducerPath: "quizApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://opentdb.com"
    }),
    endpoints: (build) => ({
        getQuestion: build.query({
            query: ({category, amount, difficulty}) => ({
                url: "/api.php",
                params:{
                    amount: amount,
                    category: category,
                    difficulty: difficulty
                }
            })
        })
    })
})