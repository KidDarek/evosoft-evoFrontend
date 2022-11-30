import React from "react";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledCardContainer = styled("div")({
  width: "500px",
  overflow: "hidden",
  boxShadow: "0px 0px 15px -5px",
  transition: "0.5s",
  animation: "ease-in",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  height: "100%",

  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0px 0px 15px 0px",
  },
});

const StyledCardContent = styled("div")({
  margin: "1rem",
  marginTop: "0.5rem",
});

const StyledH3 = styled("h3")({
  margin: 0,
  padding: 0,
});

const StyledP = styled("p")({
  margin: 0,
  padding: 0,
});

const StyledCardTitle = styled("div")({
  marginBottom: "0.5rem",
});

const StyledBtnDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const StyledH2ForPrice = styled("h2")({
  color: "green",
  textAlign: "center",
});

const StyledBtn = styled("button")({
  padding: "0.5rem",
  backgroundColor: "aquamarine",
  border: "none",
  transition: "0.2s",
  marginBottom: "0.5rem",
  borderRadius: "3px",

  "&:hover": {
    background: "green",
    transform: "scale(1.1)",
  },
});

const CardBig = (props) => {
  const navigate = useNavigate();

  const navigateToProductPage = () => {
    navigate("/Product");
  };

  return (
    <StyledCardContainer onClick={navigateToProductPage}>
      <div>
        <div>
          <img
            src={props.imageUri}
            alt=""
            overflow="hidden"
            height="200px"
          ></img>
        </div>
        <StyledCardContent>
          <StyledCardTitle>
            <StyledH3>{props.title}</StyledH3>
          </StyledCardTitle>
          <StyledP>{props.body}</StyledP>
          <StyledH2ForPrice>{props.price}</StyledH2ForPrice>
        </StyledCardContent>

        <StyledBtnDiv>
          <StyledBtn>View Product</StyledBtn>
        </StyledBtnDiv>
      </div>
    </StyledCardContainer>
  );
};

export default CardBig;
