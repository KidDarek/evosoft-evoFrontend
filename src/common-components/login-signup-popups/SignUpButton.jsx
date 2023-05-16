import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { UserContext, UserContextProvider } from "../../context-providers/UserContext";
import { IconButton, Snackbar } from "@mui/material";

const SignUpPopup = (props) => {
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const { addUser } = useContext(UserContext);

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

  const requestSignUp = (e) => {
    if (e.key === "Enter") {
      handleSignUpRequest();
    }
  };

  async function handleSignUpRequest() {
    const nameTextField = document.getElementById("sign-up-name");
    const emailTextField = document.getElementById("sign-up-email");
    const passwordTextField = document.getElementById("sign-up-password");
    const email = emailTextField.value;
    if (!validEmail(email)) {
      handleSnackOpen();
      return;
    }
    const name = nameTextField.value;
    const password = passwordTextField.value;
    const role = "user";
    const user = { name, email, password, role };
    await (addUser(user))
    setOpen(false);
  };

  const validEmail = (emailText) => {
    const validRegex = /^[A-z0-9.-_]+@[A-z0-9.-_]+\.[A-z]+$/;
    if (emailText.match(validRegex)) {
      return true;
    }
    return false;
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
        id="sign-up-button"
        variant="text"
        color="green"
        onClick={handleClickOpen}
      >
        Sign up instead
      </Button>
      <Dialog
        open={open}
        onClose={handleSignUpRequest}
        onKeyDown={requestSignUp}
      >
        <DialogTitle>Sign up</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="sign-up-name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
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

const WrappedSignUpPopup = () => (
  <UserContextProvider>
    <SignUpPopup />
  </UserContextProvider>
);
export default WrappedSignUpPopup;
