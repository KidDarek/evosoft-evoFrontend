import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, styled } from "@mui/material";
import MUIButton from "@mui/material/Button";
import LoginButton from "../login-signup-popups/LoginButton";
import ProfileButton from "./ProfileButton";
import ShoppingCart from "./ShoppingCart";


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

const StyledSearchDiv = styled("div")({
  width: "40%",
  marginLeft: "auto",
  marginRight: "auto",
});

const StyledLinks = styled("div")({
  marginRight: "25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
});




const Header = (props) => {
  const [loggedInUser, setLoggedInUser] = useState({});


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

  const navigateToSearchPage = () => {
    navigate("/Search");
  };

  return (
    <>
      <StyledHeader>
        <StyledLogo src="/images/evosoftlogo.png" alt="logo" onClick={navigateToMainPage} />
        <StyledSearchDiv>
          <MUIButton variant="contained" color="red" sx={{ width: 1 }} onClick={navigateToSearchPage}>
            Go to search page
          </MUIButton>
        </StyledSearchDiv>
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
          {loggedInUser?.id === undefined && <LoginButton theme={BasicTheme} setLoggedInUser={setLoggedInUser}> Log in / Sign up</LoginButton>}
          {loggedInUser?.id !== undefined && <ProfileButton setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} />}
          <ShoppingCart />
        </StyledLinks>
      </StyledHeader>
    </>
  );
};


export default Header;
