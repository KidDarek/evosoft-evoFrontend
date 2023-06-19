import React, { useState, useContext } from "react";
import { UserQuestionContext } from "../../context-providers/UserQuestionContext";
import MUIButton from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const AnswerQuestionButton = ({ id }) => {
  const [open, setOpen] = useState(false);
  const { getUserQuestionById, updateUserQuestion } =
    useContext(UserQuestionContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const addAnswer = async () => {
    const answerField = document.getElementById("AnswerField");
    const answer = answerField.value;
    if (answer === "") {
      return;
    }
    const userQuestion = await getUserQuestionById(id);
    await updateUserQuestion({
      id: userQuestion.id,
      question: userQuestion.question,
      answer: answer,
      userId: userQuestion.id,
    });
    setOpen(false);
  };

  return (
    <div>
      <MUIButton variant="contained" onClick={handleClickOpen}>
        {" "}
        Answer Question{" "}
      </MUIButton>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>Give the answer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="AnswerField"
            label="Answer"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <MUIButton variant="contained" onClick={addAnswer}>
            {" "}
            Add{" "}
          </MUIButton>
          <MUIButton variant="contained" onClick={handleClickClose}>
            {" "}
            Close{" "}
          </MUIButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AnswerQuestionButton;
