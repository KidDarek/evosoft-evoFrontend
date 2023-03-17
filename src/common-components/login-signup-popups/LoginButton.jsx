import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { users } from "../../db";
import SignUpButton from "./SignUpButton";
import { IconButton, Snackbar } from "@mui/material";

const LoginButton = (props) => {
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleSnackClose = () => {
    setOpenSnack(false);
  };

  const handleSnackOpen = () => {
    setOpenSnack(true);
  };

  const requestLogin = (e) => {
    if (e.key === 'Enter') {
      handleLogInRequest();
    }
  }

  const handleLogInRequest = () => {
    const emailTextField = document.getElementById("log-in-email");
    const passwordTextField = document.getElementById("log-in-password");
    const email = emailTextField.value;
    const password = passwordTextField.value;
    const logInData = { email, password };
    if (validEmail(email)) {
      const id = logIn(logInData);
      if (id >= 0) {
        props.setLoginID(id);
      }
    }
    else {
      handleSnackOpen();
      return;
    }
    setOpen(false);
  };

  const snackAction = (
    <React.Fragment>
      <Button color="red" size="small" variant="contained" onClick={handleSnackClose}>
        Close
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackClose}
      >
      </IconButton>
    </React.Fragment>
  );

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
    const validRegex = /^[A-z0-9.-_]+@[A-z0-9.-_]+\.[A-z]+$/;
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
        <Snackbar
          open={openSnack}
          autoHideDuration={6000}
          onClose={handleSnackClose}
          message="Not a valid Email"
          action={snackAction}
        />
      </Dialog>
    </div>
  );
};
export default LoginButton;
