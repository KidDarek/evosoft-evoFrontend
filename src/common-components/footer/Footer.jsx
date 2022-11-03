import { styled } from "@mui/material";
import React from "react";
import "./Footer.css";

const StyledFooter = styled("footer")({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background: "aquamarine",
  height: "auto",
  width: "100vw",
  fontFamily: "Open Sans",
  paddingTop: "40px",
  color: "#fff",
});

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className="footer-content">
          <h3>evoFrontend</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo iste
            corrupti doloribus odio sed!
          </p>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy; {new Date().getFullYear()} evoFrontend team.</p>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
