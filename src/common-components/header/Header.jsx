import React from "react";
import logo from "./evosoftlogo.png";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import MUIButton from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const Header = (props) => {
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
  const StyledHeader = styled("div")({
    backgroundImage: "linear-gradient(to right,#ff0055, #0066ff, #00cc99)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap:"15px",
  });
  const StyledLogo = styled("img") ({
    width: "50px",
    height: "50px",
    marginLeft: "auto",
    cursor: "pointer",
  })
  const StyledSearchField = styled("input")({
    type: "text",
    placeholder: "Search",
    width: "400px" , 
    height: "30px", 
    borderRadius: "10px", 
    marginLeft: "auto",
  })
  const StyledLinks = styled("div")({
    marginLeft:"auto",
    marginRight:"25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
  })
  const BasicTheme = createTheme({
    palette: {
      green: {
        main: "#00cc99",
        contrastText: "#fff",
      },
      red: {
        main: "#ff0055",
        dark:"#990033",
        contrastText: "#fff",
      },
      white: {
        main: "#FFFFFF",
      }
    },
  });
  return (
    <>
      <ThemeProvider theme={BasicTheme}>
        <StyledHeader>

          <StyledLogo src={logo} alt="logo" onClick={navigateToMainPage} />

          <StyledSearchField />
          <MUIButton variant="outlined" color="white">Search</MUIButton>

          <StyledLinks>
            <MUIButton variant="contained" onClick={navigateToFaqPage} color="red">FAQ</MUIButton>
            <MUIButton variant="contained" onClick={navigateToAboutUsPage} color="red">About Us</MUIButton>
            <MUIButton variant="contained" onClick={navigateToContactUsPage} color="red">Contact</MUIButton>
            <MUIButton variant="contained" color="red">Log in / Sign up</MUIButton>
          </StyledLinks>

        </StyledHeader>
      </ThemeProvider>
    </>
  );
};

export default Header;
