import React from "react";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../../BLL/redux/hooks/typesHook";
import { useNavigate } from "react-router";
import { clearAnswersInfo } from "../../../BLL/redux/reducers/answersInfoReducer";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { clearSettings } from "../../../BLL/redux/reducers/settingsQuizReducer";

const ButtonRestart = () => {
     const navigate = useNavigate();
     const dispatch = useAppDispatch();

     const restart = () => {
          setTimeout(()=>{
               dispatch(clearAnswersInfo());
               dispatch(clearSettings())
               navigate("/");
          }, 500)
     };

     return (
          <Button
               className="restartBtn"
               onClick={() => restart()}
               variant="contained"
               endIcon={<RestartAltIcon />}
          >
               Restart
          </Button>
     );
};

export default ButtonRestart;
