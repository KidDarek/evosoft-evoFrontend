import React from "react";
import HeaderButton from "./HeaderButton";
import logo from "./evosoftlogo.png"
const Header1 = (props) => {
  

  return (
    <>
      <div className="header1">

        <HeaderButton image={logo} path="/" />

        <div className="search-field">
          <input type="text" placeholder="Search" style={{width: "400px"}}/>
          <button>Search</button>
        </div>

        <div className="links">
          <HeaderButton text="FAQ" path="/FAQ" />
          <HeaderButton text="About us" path="/About-Us" />
          <HeaderButton text="Contact" path="/Contact" />
          <button>Log in/Sign up</button>
        </div>

      </div>
    </>
  );
};

export default Header1;
