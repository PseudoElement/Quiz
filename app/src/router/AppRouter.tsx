import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstPage from "../pages/FirstPage";
import QuestionPage from "../pages/QuestionPage";
import ResultsPage from "../pages/ResultsPage";

const AppRouter = () => {
     return (
          <Routes>
               <Route path="/" element={<FirstPage />} />
               <Route path="/quiz" element={<QuestionPage />} />
               <Route path="/results" element={<ResultsPage />} />
          </Routes>
     );
};

export default AppRouter;
