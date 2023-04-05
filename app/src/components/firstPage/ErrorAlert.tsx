import { Alert, AlertTitle } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../shared/hooks/typesHook";
const ErrorAlert = () => {
     const error = useAppSelector((state) => state.dataQuizReducer.error);

     return (
          <Alert style={{ marginBottom: 20 }} severity="error">
               <AlertTitle>Error</AlertTitle>
               {error} — <strong>check it out!</strong>
          </Alert>
     );
};

export default ErrorAlert;
