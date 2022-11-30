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
  const handleSignUp = () => {
    const emailextField = document.getElementById("sign-up-email");
    const passwordTextField = document.getElementById("sign-up-password");
    const email = emailextField.value;
    const password = passwordTextField.value;
    const obj = { email, password };
    users.push(obj);
    console.log(users);
    setOpen(false);
  };

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
      <Dialog open={open} onClose={handleSignUp}>
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
          <Button onClick={handleSignUp}>Sign up</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default SignUpPopup;
