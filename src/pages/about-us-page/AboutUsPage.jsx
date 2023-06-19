import { styled } from "@mui/material";
import React from "react";

const StyledHeader = styled("div")({
  display: "flex",
  justifyContent: "center",
  fontSize: "31px",
  paddingBottom: "5px",
});

const StyledParagraph = styled("div")({
  fontSize: "20px",
  textAlign: "justify",
});

const StyledPageDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
  height: "100%",
  paddingTop: "20px",
  backgroundColor: "#00EFB3",
  color: "white",
  fontWeight: "bold",
});

const StyledTable = styled("table")({
  width: "40%",
  background: "#00cc99",
  borderRadius: "15px",
  padding: "5px 10px 0px 10px",
  borderSpacing: "18px",
  "& td": {
    verticalAlign: "top",
  },
});

const StyledImage = styled("img")({
  width: "100%",
});

const AboutUsPage = (props) => {
  return (
    <>
      <StyledPageDiv>
        <StyledTable>
          <tbody>
            <tr>
              <td colSpan={3}>
                <StyledHeader>About Us</StyledHeader>
              </td>
            </tr>
            <tr>
              <td width="40%">
                <StyledImage src="/images/AboutUs/aboutUs1.png" />
              </td>
              <td colSpan={2} width="60%">
                <StyledParagraph>
                  We are an online retail store that specializes in providing a
                  wide range of products to our customers. Our company was
                  founded in 2010 with the goal of making shopping easy and
                  convenient for our customers.
                </StyledParagraph>
              </td>
            </tr>
            <tr>
              <td colSpan={2} width="60%">
                <StyledParagraph>
                  Our team consists of experienced professionals in the
                  e-commerce industry, who work tirelessly to ensure that our
                  customers have the best shopping experience. We offer a wide
                  range of products including clothing, electronics, home goods
                  and more.
                </StyledParagraph>
              </td>
              <td width="40%">
                <StyledImage src="/images/AboutUs/aboutUs2.png" />
              </td>
            </tr>
            <tr>
              <td width="40%">
                <StyledImage src="/images/AboutUs/aboutUs3.png" />
              </td>
              <td colSpan={2} width="60%">
                <StyledParagraph>
                  We are committed to providing our customers with high-quality
                  products at competitive prices. Our user-friendly website and
                  easy checkout process makes shopping with us a breeze. We also
                  have an efficient and dedicated customer service team to
                  assist with any questions or concerns.
                </StyledParagraph>
              </td>
            </tr>
            <tr>
              <td colSpan={2} width="60%">
                <StyledParagraph>
                  In addition, we offer fast and reliable shipping and easy
                  returns, so you can shop with confidence. Thank you for
                  choosing us as your go-to online retailer.
                </StyledParagraph>
              </td>
              <td width="40%">
                <StyledImage src="/images/AboutUs/aboutUs4.png" />
              </td>
            </tr>
          </tbody>
        </StyledTable>
      </StyledPageDiv>
    </>
  );
};

export default AboutUsPage;
