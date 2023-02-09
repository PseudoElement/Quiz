import React from "react";
import { Link } from "react-router-dom";
import { quizApi } from "../redux/API/quizAPI";
import { useAppDispatch, useAppSelector } from "../redux/hooks/typesHook";
import { clearAnswersInfo } from "../redux/reducers/answersInfoReducer";

const ResultsPage = () => {
     const answersInfo = useAppSelector(
          (state) => state.answersInfoReducer.answersInfo
     );

     const dispatch = useAppDispatch();

     React.useEffect(() => {
          console.log(answersInfo)
     }, [answersInfo]);

     return (
          <div>
               RESULTS
               <Link onClick={()=> dispatch(clearAnswersInfo())} to={"/"}>
                    <button>Restart</button>
               </Link>
          </div>
     );
};

export default ResultsPage;
