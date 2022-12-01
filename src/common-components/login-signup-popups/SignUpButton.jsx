import React from "react";
//import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { users } from "../../db";

const SignUpPopup = (props) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const requestSignUp = (e) => {
    if (e.key === 'Enter') {
      handleSignUpRequest();
    }
  }
  const handleSignUpRequest = () => {
    const emailextField = document.getElementById("sign-up-email");
    const passwordTextField = document.getElementById("sign-up-password");
    const email = emailextField.value;
    if (!validEmail(email)) {
      console.log("Not valid email");
      return;
    }
    const password = passwordTextField.value;
    const id = users[users.length - 1].id + 1;
    const obj = { id, email, password };
    users.push(obj);
    console.log(users);
    setOpen(false);
  };

  const validEmail = (emailText) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailText.match(validRegex)) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <Button
        id="sign-up-button"
        variant="text"
        color="green"
        onClick={handleClickOpen}
      >
        Sign up instead
      </Button>
      <Dialog open={open} onClose={handleSignUpRequest} onKeyDown={requestSignUp}>
        <DialogTitle>Sign up</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="sign-up-email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="sign-up-password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel</Button>
          <Button onClick={handleSignUpRequest}>Sign up</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default SignUpPopup;
