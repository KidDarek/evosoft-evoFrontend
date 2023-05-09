import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import SignUpButton from "./SignUpButton";
import { IconButton, Snackbar } from "@mui/material";
import { UserContext, UserContextProvider } from "../../context-providers/UserContext";

const LoginButton = (props) => {
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const { loginUser, loggedInUser } = useContext(UserContext);

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
    if (e.key === "Enter") {
      handleLogInRequest();
    }
  };

  const handleLogInRequest = () => {
    const emailTextField = document.getElementById("log-in-email");
    const passwordTextField = document.getElementById("log-in-password");
    const email = emailTextField.value;
    const name = undefined;
    const password = passwordTextField.value;
    const logInData = { email, name, password };
    const success = logIn(logInData);
    if (!success) {
      handleSnackOpen();
      return;
    }
    props.setLoggedInUser(loggedInUser);
    setOpen(false);
  };

  const snackAction = (
    <React.Fragment>
      <Button
        color="red"
        size="small"
        variant="contained"
        onClick={handleSnackClose}
      >
        Close
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackClose}
      ></IconButton>
    </React.Fragment>
  );

  const logIn = (logInData) => {
    loginUser(logInData);
    console.log(loggedInUser)
    if (loggedInUser?.id === undefined) {
      return false;
    }
    return true;
  };

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
          <Button color="red" onClick={handleClickClose}>Cancel</Button>
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

const WrappedLoginButton = (props) => (
  <UserContextProvider>
    <LoginButton theme={props.theme} setLoggedInUser={props.setLoggedInUser} />
  </UserContextProvider>
);
export default WrappedLoginButton;
