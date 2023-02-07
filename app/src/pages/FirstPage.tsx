import React from "react";
import { Link } from "react-router-dom";

const FirstPage = () => {

     return (
          <div>
               <Link to={"/quiz"}>
                    <button>Start</button>
               </Link>
               First Page
          </div>
     );
};

export default FirstPage;
