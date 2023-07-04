import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import SignUpButton from "./SignUpButton";
import { IconButton, Snackbar } from "@mui/material";
import { UserContext } from "../../context-providers/UserContext";
import { useLocation } from "react-router-dom";

const LoginButton = (props) => {
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const { loginUser } = useContext(UserContext);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const userDTOString = queryParams.get("userDTO");
  if (userDTOString) {
    const userDTO = JSON.parse(userDTOString);

    const userId = userDTO.Id;
    const userName = userDTO.Name;
    const userEmail = userDTO.Email;
    const user = { userId, userName, userEmail };

    console.log(user);
    // Handle the login process with userDTO...
    props.setLoggedInUser(user);
    setOpen(false);

    // Clear the query parameter from the URL
    queryParams.delete("userDTO");
    //props.history.replace({ search: queryParams.toString() });
  }

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

  const handleLogInRequest = async () => {
    const emailTextField = document.getElementById("log-in-email");
    const passwordTextField = document.getElementById("log-in-password");
    const email = emailTextField.value;
    const name = undefined;
    const password = passwordTextField.value;
    const logInData = { email, name, password };
    const user = await loginUser(logInData);
    if (user.id === undefined) {
      handleSnackOpen();
      return;
    }
    props.setLoggedInUser(user);
    setOpen(false);
  };

  const handleGithubLoginRequest = () => {
    const authorizationUrl =
      "http://github.com/login/oauth/authorize?client_id=ac9c3f680f66d0c835de&redirect_uri=http://192.168.0.195:5232/api/github/callback&scope=user:email";
    window.location.href = authorizationUrl;
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
          <Button color="red" onClick={handleClickClose}>
            Cancel
          </Button>
          <Button onClick={handleLogInRequest}>Log in</Button>
          <Button onClick={handleGithubLoginRequest} sx={{ color: "black" }}>
            Log in with GitHub
          </Button>
        </DialogActions>
        <Snackbar
          open={openSnack}
          autoHideDuration={6000}
          onClose={handleSnackClose}
          message="Email or password is incorrect"
          action={snackAction}
        />
      </Dialog>
    </div>
  );
};

export default LoginButton;
