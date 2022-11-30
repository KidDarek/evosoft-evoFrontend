import { styled } from "@mui/material";
import React from "react";

const StyledFooter = styled("footer")({
  bottom: 0,
  left: 0,
  right: 0,
  background: "aquamarine",
  height: "auto",
  width: "100vw",
  color: "#fff",
  marginTop: "20px",
});

const FooterContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
});

const FooterContentH3 = styled("h3")({
  fontSize: "1.8rem",
  fontWeight: 400,
  textTransform: "capitalize",
  lineHeight: "3rem",
  color: "black",
});

const FooterContentP = styled("p")({
  maxWidth: "500px",
  margin: "10px auto",
  lineHeight: "28px",
  fontSize: "14px",
  color: "black",
});

const FooterBottom = styled("div")({
  background: "aquamarine",
  width: "100vw",
  padding: "20px 0",
  textAlign: "center",
});
const FooterBottomP = styled("p")({
  fontSize: "14px",
  wordSpacing: "2px",
  textTransform: "capitalize",
  color: "black",
});

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <FooterContent>
          <FooterContentH3>evoFrontend</FooterContentH3>
          <FooterContentP>The trusted webshop of all kinds.</FooterContentP>
        </FooterContent>
        <FooterBottom>
          <FooterBottomP>
            Copyright &copy; {new Date().getFullYear()} evoFrontend team.
          </FooterBottomP>
        </FooterBottom>
      </StyledFooter>
    </>
  );
};

export default Footer;
