import React from "react";
import logo from "./evosoftlogo.png";
import { useNavigate } from "react-router-dom";
import MuiFormattedButton from "../MuiFormattedButton";
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
  const headerStyle = {
    backgroundColor: "aquamarine",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
  const searchFieldStyle = {
    marginLeft: "30%",
  }
  const linkStyle = {
    marginLeft:"auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "80px",
  }
  return (
    <>
      <div className="header1" style={headerStyle}>
        <img
          src={logo}
          width="50"
          height="50"
          alt="logo"
          onClick={navigateToMainPage}
        />
        <div className="search-field" style={searchFieldStyle}>
          <input type="text" placeholder="Search" style={{ width: "400px" }} />
          <button>Search</button>
        </div>

        <div className="links" style={linkStyle}>
          <MuiFormattedButton
            buttonText="FAQ"
            onButtonClick={navigateToFaqPage}
          />
          <MuiFormattedButton
            buttonText="About Us"
            onButtonClick={navigateToAboutUsPage}
          />
          <MuiFormattedButton
            buttonText="Contact"
            onButtonClick={navigateToContactUsPage}
          />
          <button>Log in/Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Header;
