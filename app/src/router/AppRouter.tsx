import { Routes, Route, Navigate } from "react-router-dom";
import FirstPage from "../pages/FirstPage";
import QuestionPage from "../pages/QuestionPage";
import ResultsPage from "../pages/ResultsPage";

const AppRouter = () => {
     return (
          <Routes>
               <Route path="/" element={<FirstPage />} />
               <Route path="/quiz" element={<QuestionPage />} />
               <Route path="/results" element={<ResultsPage />} />
               <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
     );
};

export default AppRouter;
