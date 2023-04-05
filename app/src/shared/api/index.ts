import axios from "axios";

export * from "./endpoints";

export const api = axios.create({
     baseURL: "https://opentdb.com/",
     headers: {
          "Content-Type": "application/json",
     },
});
