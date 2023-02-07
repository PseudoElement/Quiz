import React from "react";
import { Link } from "react-router-dom";

const ResultsPage = () => {
     return (
          <div>
               RESULTS
               <Link to={"/"}>
                    <button>Restart</button>
               </Link>
          </div>
     );
};

export default ResultsPage;
