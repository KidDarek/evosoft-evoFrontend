import React from "react";
import { useState } from "react";
import { userQuestions } from "../../db";
import MUIButton from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "@emotion/styled";

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "10px 25px 10px 25px",
  backgroundColor: "#00EFB3",
});

const AddQuestionButton = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    props.setIndex(false);
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const addQuestion = () => {
    const questionField = document.getElementById("QuestionField");
    const question = questionField.value;
    if (question === "") {
      return;
    }
    const id = userQuestions.length;
    userQuestions.push({ id, question });
    props.setIndex(true);
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
