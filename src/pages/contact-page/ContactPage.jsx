import { styled } from "@mui/material";
import React from "react";

const StyledHeader = styled("h1")({
  color: "white",
  aligntext: "center",
  width: "40%",
  display: "flex",
  justifyContent: "center",
});

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "10px 25px 10px 25px",
  backgroundColor: "#00EFB3",
});

const StyledParagraph = styled("P")({
  color: "white",
  aligntext: "left",
  width: "100%",
  display: "flex",
  justifyContent: "left",
  fontWeight: "bold",
});


const ContactPage = (props) => {
  return (
    <>
      <StyledPageDiv>
        <StyledHeader>Contanct</StyledHeader>
        <StyledParagraph>

          We are always here to help you with any questions or concerns you may have. You can reach us through the following ways:

          <br />Email: info@example.com
          <br />Phone: 555-555-5555
          <br />Fax: 555-555-5556

          <br />Our customer service team is available Monday-Friday 9:00am-5:00pm EST.

          <br />You can also reach us through our social media channels:
          <br />Facebook: https://www.facebook.com/example
          <br /> Twitter: https://twitter.com/example
          <br />Instagram: https://www.instagram.com/example

          <br />For any press or media inquiries, please contact our PR team at pr@example.com
        </StyledParagraph>
      </StyledPageDiv>
    </>
  );
};

export default ContactPage;
