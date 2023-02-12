import React from "react";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../redux/hooks/typesHook";
import { useNavigate } from "react-router";
import { clearAnswersInfo } from "../../redux/reducers/answersInfoReducer";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { clearSettings } from "../../redux/reducers/settingsQuizReducer";

const ButtonRestart = () => {
     const navigate = useNavigate();
     const dispatch = useAppDispatch();

     const restart = () => {
          dispatch(clearAnswersInfo());
          dispatch(clearSettings())
          navigate("/");
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
