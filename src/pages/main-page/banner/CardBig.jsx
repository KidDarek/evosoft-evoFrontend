import React, { useEffect, useContext, useState } from "react";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ProductContext,
  ProductContextProvider,
} from "../../../context-providers/ProductContext";

const StyledCardContainer = styled("div")({
  width: "430px",
  height: "330px",
  overflow: "hidden",
  boxShadow: "0px 0px 15px -5px",
  padding: "10px",
  transition: "0.5s",
  cursor: "pointer",
  textAlign: "center",
  background: "linear-gradient(-45deg, #ff0055, #8900FF, #0066CD, #ffffff)",
  backgroundSize: "200% 200%",
  "@keyframes gradient": {
    from: {
      backgroundPosition: "50% 0% ",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    to: {
      backgroundPosition: "50% 0%",
    },
  },
  animation: "gradient 10s infinite ease",
  position: "static",

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
  color: "white",
  textDecoration: "underline",
});

const StyledCardTitle = styled("div")({
  marginBottom: "0.5rem",
});

const StyledH2ForPrice = styled("h2")({
  color: "white",
  textDecoration: "underline",
  textAlign: "center",
});

const CardBig = (props) => {
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
            height="70%"
            width="70%"
          ></img>
        </div>
        <StyledCardContent>
          <StyledCardTitle>
            <StyledH3>{product.title}</StyledH3>
          </StyledCardTitle>
          <StyledH2ForPrice>{"$" + product.price}</StyledH2ForPrice>
        </StyledCardContent>
      </StyledCardContainer>
    </ProductContextProvider>
  );
};
export default CardBig;
