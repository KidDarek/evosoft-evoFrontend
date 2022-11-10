import React from "react";
import "./Card.css";
import { styled } from "@mui/material";

const StyledCardContainer = styled("div")({
  width: "300px",
  overflow: "hidden",
  boxShadow: "0px 0px 15px -5px",
  transition: "0.5s",
  animation: "ease-in",
});

const CardContent = styled("div")({
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

const CardTitle = styled("div")({
  marginBottom: "0.5rem",
});

const StyledBtnDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
});
const StyledBtn = styled("button")({
  padding: "0.5rem",
  backgroundColor: "white",
  border: "none",
  transition: "0.2s",
  marginBottom: "0.5rem",
  borderRadius: "3px",
});

const Card = (props) => {
  return (
    <StyledCardContainer>
      <div>
        <img src={props.imageUri} alt="" overflow="hidden" height="200px"></img>
      </div>
      <CardContent>
        <CardTitle>
          <StyledH3>{props.title}</StyledH3>
        </CardTitle>
        <div className="card-body">
          <StyledP>{props.body}</StyledP>
        </div>
        <h2 style={{ color: "green" }}>{props.price}</h2>
      </CardContent>

      <StyledBtnDiv>
        <StyledBtn>View Product</StyledBtn>
      </StyledBtnDiv>
    </StyledCardContainer>
  );
};

export default Card;
