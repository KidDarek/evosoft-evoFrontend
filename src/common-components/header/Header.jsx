import React from "react";
import HeaderButton from "./HeaderButton";
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

  return (
    <>
      <div className="header1">
        <img
          src={logo}
          width="50"
          height="50"
          alt="logo"
          onClick={navigateToMainPage}
        />
        <div className="search-field">
          <input type="text" placeholder="Search" style={{ width: "400px" }} />
          <button>Search</button>
        </div>

        <div className="links">
          {/* <HeaderButton text="FAQ" path="/FAQ" /> */}
          <MuiFormattedButton
            buttonText="FAQ"
            onButtonClick={navigateToFaqPage}
          />

          <HeaderButton text="About us" path="/About-Us" />
          <HeaderButton text="Contact" path="/Contact" />
          <button>Log in/Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Header;
