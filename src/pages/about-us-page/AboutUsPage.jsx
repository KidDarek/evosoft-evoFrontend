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

const AboutUsPage = (props) => {
  return (
    <>
      <StyledPageDiv>
        <StyledHeader>About Us</StyledHeader>
        <StyledParagraph>

          <br />We are an online retail store that specializes in providing a wide range of products to our customers.
          Our company was founded in 2010 with the goal of making shopping easy and convenient for our customers.

          <br /> Our team consists of experienced professionals in the e-commerce industry, who work tirelessly to ensure that our customers have the best shopping experience.
          We offer a wide range of products including clothing, electronics, home goods and more.

          <br /> We are committed to providing our customers with high-quality products at competitive prices.
          Our user-friendly website and easy checkout process makes shopping with us a breeze.
          We also have an efficient and dedicated customer service team to assist with any questions or concerns.

          <br /> In addition, we offer fast and reliable shipping and easy returns, so you can shop with confidence. T
          hank you for choosing us as your go-to online retailer.</StyledParagraph>
      </StyledPageDiv>
    </>
  );
};

export default AboutUsPage;
