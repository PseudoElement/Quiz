import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useAppDispatch } from "../../shared/hooks/typesHook";
import { clearAnswersInfo } from "../../store/reducers/answersInfoReducer";
import { clearSettings } from "../../store/reducers/settingsQuizReducer";

const ButtonRestart = () => {
     const navigate = useNavigate();
     const dispatch = useAppDispatch();

     const restart = () => {
          setTimeout(() => {
               dispatch(clearAnswersInfo());
               dispatch(clearSettings());
               navigate("/");
          }, 500);
     };

     return (
          <Button className="restartBtn" onClick={() => restart()} variant="contained" endIcon={<RestartAltIcon />}>
               Restart
          </Button>
     );
};

export default ButtonRestart;
