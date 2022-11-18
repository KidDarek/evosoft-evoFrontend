import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { users } from '../../db';
import SignUpButton from './SignUpButton';

const LoginButton = (props) => {
    const [open, setOpen] = React.useState(false);
    const [loggedIn, setLoggedin] = React.useState(false);

    const handleClickOpen = () => {
        if (loggedIn) {
            setLoggedin(false);
            const loginButton = document.getElementById("login-button");
            loginButton.innerText = "Log in / Sign up";
            return
        }
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false);
    };
    const handleLogIn = () => {
        const emailextField = document.getElementById("log-in-email");
        const passwordTextField = document.getElementById("log-in-password");
        const loginButton = document.getElementById("login-button");
        const email = emailextField.value;
        const password = passwordTextField.value;

        for (let index = 0; index < users.length; index++) {
            if (email === users[index].email && password === users[index].password) {
                console.log("access granted");
                setLoggedin(true);
                loginButton.innerText = "Log out";
                break;
            }
        }

        if (!loggedIn) {
            console.log("access denied");
        }
        setOpen(false);
    };

    return (
        <div>
                <Button id="login-button" variant="contained" color="red" onClick={handleClickOpen}>
                    Log in / Sign up
                </Button>
                <Dialog open={open} onClose={handleClickClose}>
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
                        <SignUpButton theme={props.theme}/>
                        <Button onClick={handleClickClose}>Cancel</Button>
                        <Button onClick={handleLogIn}>Log in</Button>
                    </DialogActions>
                </Dialog>
        </div>
    );
}
export default LoginButton;