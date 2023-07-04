import React, { useContext, useState, useEffect } from "react";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ProductContextProvider,
  ProductContext,
} from "../../../context-providers/ProductContext";

const StyledCardContainer = styled("div")({
  width: "300px",
  overflow: "hidden",
  boxShadow: "0px 0px 15px -5px",
  transition: "0.5s",
  animation: "ease-in",
  cursor: "pointer",
  background: "white",

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
    navigate(`/Product/${props.id}`);
  };

  const { getProductById } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const product = await getProductById(props.id);
      setProduct(product);
    }

    fetchProduct();
  }, [getProductById, props.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <ProductContextProvider>
      <StyledCardContainer onClick={navigateToProductPage}>
        <div>
          <img
            src={`data:image/png;base64,${product.imageData}`}
            alt=""
            overflow="hidden"
            height="200px"
          />
        </div>
        <StyledCardContent>
          <StyledCardTitle>
            <StyledH3>{product.title}</StyledH3>
          </StyledCardTitle>
          <StyledP>{product.body}</StyledP>
          <StyledH2ForPrice>{"$" + product.price}</StyledH2ForPrice>
        </StyledCardContent>
      </StyledCardContainer>
    </ProductContextProvider>
  );
};

export default Card;
