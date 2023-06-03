import { styled } from "@mui/material";
import React from "react";

const StyledHeader = styled("div")({
  display: "flex",
  justifyContent: "center",
  fontSize: "31px",
});

const StyledParagraph = styled("div")({
  fontSize: "19px",
  paddingBottom: "20px",
  display: "flex",
  alignItems: "center",
});

const StyledMainParagraph = styled("div")({
  fontSize: "22px",
  textAlign: "left",
  padding: "24px 0px 15px 0px",
});

const StyledPageDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
  height: "100%",
  padding: "20px 0px 20px 0px",
  backgroundColor: "#00EFB3",
  color: "white",
  fontWeight: "bold",
});

const StyledComponent = styled("div")({
  width: "25%",
  background: "#00cc99",
  borderRadius: "15px",
  padding: "25px 20px 15px 23px",
});

const StyledImage = styled("img")({
  width: "5%",
  marginRight: "10px",
  borderRadius: "5px",
});

const ContactPage = (props) => {
  return (
    <>
      <StyledPageDiv>
        <StyledComponent>
          <StyledHeader>Contact</StyledHeader>
          <StyledMainParagraph>
            Our customer service team is available Monday-Friday 9:00am-5:00pm
            EST.
          </StyledMainParagraph>
          <StyledParagraph>
            <StyledImage src="/images/Contacts/email.png" />
            Email: info@example.com
          </StyledParagraph>
          <StyledParagraph>
            <StyledImage src="/images/Contacts/phone.png" />
            Phone: 555-555-5555
          </StyledParagraph>
          <StyledParagraph>
            <StyledImage src="/images/Contacts/fax.png" />
            Fax: 555-555-5556
          </StyledParagraph>
          <StyledMainParagraph>
            You can also reach us through our social media channels:
          </StyledMainParagraph>
          <StyledParagraph>
            <StyledImage src="/images/Contacts/facebook.png" />
            Facebook: https://www.facebook.com/example
          </StyledParagraph>
          <StyledParagraph>
            <StyledImage src="/images/Contacts/instagram.png" />
            Instagram: https://www.instagram.com/example
          </StyledParagraph>
          <StyledParagraph>
            <StyledImage src="/images/Contacts/twitter.png" />
            Twitter: https://twitter.com/example
          </StyledParagraph>
          <StyledMainParagraph>
            For any press or media inquiries, please contact our PR team at
            pr@example.com
          </StyledMainParagraph>
        </StyledComponent>
      </StyledPageDiv>
    </>
  );
};

export default ContactPage;
