import React, { useState } from "react";
import logo from "./evosoftlogo.png";
import { useNavigate } from "react-router-dom";
import { Card, styled } from "@mui/material";
import MUIButton from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginButton from "../login-signup-popups/LoginButton";
import ProfileButton from "./ProfileButton";


const StyledHeader = styled("div")({
  backgroundColor: "#00cc99",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: "15px",
});

const StyledLogo = styled("img")({
  width: "50px",
  height: "50px",
  marginTop: "5px",
  marginBottom: "5px",
  marginLeft: "auto",
  cursor: "pointer",
});

const StyledSearchField = styled("input")({
  type: "text",
  placeholder: "Search",
  width: "400px",
  height: "30px",
  borderRadius: "10px",
  marginLeft: "auto",
});

const StyledLinks = styled("div")({
  marginLeft: "auto",
  marginRight: "25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
});

const BasicTheme = createTheme({
  palette: {
    green: {
      main: "#00cc99",
      contrastText: "#fff",
    },
    red: {
      main: "#ff0055",
      dark: "#990033",
      contrastText: "#fff",
    },
    white: {
      main: "#FFFFFF",
    },
  },
});


const Header = (props) => {
  const [loggedIn, setLoggedin] = useState(false);

  const [logInID, setLoginID] = useState(null);

  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate("/");
  };

  const navigateToFaqPage = () => {
    navigate("/FAQ");
  };

  const navigateToAboutUsPage = () => {
    navigate("/About-Us");
  };

  const navigateToContactUsPage = () => {
    navigate("/Contact");
  };

  return (
    <>
      <ThemeProvider theme={BasicTheme}>
        <StyledHeader>
          <StyledLogo src={logo} alt="logo" onClick={navigateToMainPage} />

          <StyledSearchField />
          <MUIButton variant="outlined" color="white">
            Search
          </MUIButton>
          <Card />
          <StyledLinks>
            <MUIButton
              variant="contained"
              onClick={navigateToFaqPage}
              color="red"
            >
              FAQ
            </MUIButton>
            <MUIButton
              variant="contained"
              onClick={navigateToAboutUsPage}
              color="red"
            >
              About Us
            </MUIButton>
            <MUIButton
              variant="contained"
              onClick={navigateToContactUsPage}
              color="red"
            >
              Contact
            </MUIButton>
            {!loggedIn && <LoginButton theme={BasicTheme} setLoggedin={setLoggedin} setLoginID={setLoginID}> Log in / Sign up</LoginButton>}
            {loggedIn && <ProfileButton setLoggedin={setLoggedin} logInID={logInID} />}
          </StyledLinks>
        </StyledHeader>
      </ThemeProvider>
    </>
  );
};

export default Header;
