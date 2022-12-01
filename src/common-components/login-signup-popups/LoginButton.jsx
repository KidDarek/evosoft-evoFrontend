import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { users } from "../../db";
import SignUpButton from "./SignUpButton";

const LoginButton = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const requestLogin = (e) => {
    if (e.key === 'Enter') {
      handleLogInRequest();
    }
  }

  const handleLogInRequest = () => {
    const emailextField = document.getElementById("log-in-email");
    const passwordTextField = document.getElementById("log-in-password");
    const email = emailextField.value;
    const password = passwordTextField.value;
    const logInData = { email, password };
    if (validEmail(email)) {
      const id = logIn(logInData);
      if (id >= 0) {
        console.log("Successful login");
        props.setLoginID(id);
      }
    }
    else {
      console.log('Not Valid Email');
      return;
    }
    setOpen(false);
  };

  const logIn = (logInData) => {
    for (let index = 0; index < users.length; index++) {
      if (logInData.email === users[index].email && logInData.password === users[index].password) {
        props.setLoggedin(true);
        return index + 1;
      }
    }
    return -1;
  }

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
        id="login-button"
        variant="contained"
        color="red"
        onClick={handleClickOpen}
      >
        Log in / Sign up
      </Button>
      <Dialog open={open} onClose={handleClickClose} onKeyDown={requestLogin}>
        <DialogTitle>Log in to your account</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="log-in-email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="log-in-password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <SignUpButton theme={props.theme} />
          <Button onClick={handleClickClose}>Cancel</Button>
          <Button onClick={handleLogInRequest}>Log in</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default LoginButton;
