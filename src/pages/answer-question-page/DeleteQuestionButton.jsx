import React, { useContext } from "react";
import { UserQuestionContext } from "../../context-providers/UserQuestionContext";
import MUIButton from "@mui/material/Button";

const DeleteQuestionButton = ({ id }) => {
  const { removeUserQuestion } = useContext(UserQuestionContext);

  const deleteQuestion = async () => {
    await removeUserQuestion(id);
  };

  return (
    <div>
      <MUIButton
        sx={{ bgcolor: "#ff0000" }}
        variant="contained"
        onClick={deleteQuestion}
      >
        {" "}
        Delete{" "}
      </MUIButton>
    </div>
  );
};

export default DeleteQuestionButton;
