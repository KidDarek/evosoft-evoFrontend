import React, { Fragment } from "react";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { products } from "../../../db";
//import { products } from "../../../db";

const StyledCardContainer = styled("div")({
  width: "300px",
  overflow: "hidden",
  boxShadow: "0px 0px 15px -5px",
  transition: "0.5s",
  animation: "ease-in",
  cursor: "pointer",

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

const StyledH2ForPrice = styled("h2")({
  color: "green",
  textAlign: "center",
});

const Card = (props) => {
  const navigate = useNavigate();

  const navigateToProductPage = () => {
    navigate("/Product");
  };

  return products.map((product, i) =>
    product.id === props.id ? (
      <Fragment key={i}>
        <StyledCardContainer onClick={navigateToProductPage}>
          <div>
            <img
              src={product.imageUri}
              alt=""
              overflow="hidden"
              height="200px"
            ></img>
          </div>
          <StyledCardContent>
            <StyledCardTitle>
              <StyledH3>{product.title}</StyledH3>
            </StyledCardTitle>
            <StyledP>{product.body}</StyledP>
            <StyledH2ForPrice>{product.price}</StyledH2ForPrice>
          </StyledCardContent>
        </StyledCardContainer>
      </Fragment>
    ) : null
  );
};
export default Card;
