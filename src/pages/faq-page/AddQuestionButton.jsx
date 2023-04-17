import React, { useState, useContext } from "react";
import { UserQuestionContext } from "../../context-providers/UserQuestionContext";
import MUIButton from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "10px 25px 10px 25px",
  backgroundColor: "#00EFB3",
});

const AddQuestionButton = () => {
  const [open, setOpen] = useState(false);
  const { addUserQuestion } = useContext(UserQuestionContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const addQuestion = async () => {
    const questionField = document.getElementById("QuestionField");
    const question = questionField.value;
    if (question === "") {
      return;
    }
    const id = uuidv4();
    await addUserQuestion({
      id,
      question: question,
      answer: "atleast10charlongstring",
      userId: id,
    });
    setOpen(false);
  };

  return (
    <div>
      <StyledPageDiv>
        <MUIButton variant="contained" onClick={handleClickOpen}>
          {" "}
          Add Question{" "}
        </MUIButton>
      </StyledPageDiv>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>Got a Question?</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="QuestionField"
            label="Question you wish to add"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <MUIButton variant="contained" onClick={addQuestion}>
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

export default AddQuestionButton;
