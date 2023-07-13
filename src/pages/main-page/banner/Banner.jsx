import React, { useState, useContext, useEffect } from "react";
import { styled } from "@mui/material";
import CardSmall from "./CardSmall";
import CardBig from "./CardBig";
import { ProductContext } from "../../../context-providers/ProductContext";

const StyledBannerDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "0",
  height: "400px",
  width: "100%",
});

const StyledBannerColors = styled("div")({
  background: "linear-gradient(-45deg, #ff0055, #0003cc, #0066CD, #00cc99)",
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
});

const StyledLeftButton = styled("button")({
  backgroundColor: "white",
  height: "400px",
  width: "8%",
  border: "none",
  opacity: "10%",
});

const StyledRightButton = styled("button")({
  backgroundColor: "white",
  height: "400px",
  width: "8%",
  float: "right",
  border: "none",
  opacity: "10%",
});

const StyledSmallDiv = styled("div")({
  width: "5%",
  height: "400px",
});

const StyledMediumDiv = styled("div")({
  width: "10%",
  height: "400px",
});

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const Banner = () => {
  const { products } = useContext(ProductContext);
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    setShuffledProducts(shuffleArray(products));
  }, [products]);

  const [startIndex, setStartIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return shuffledProducts.length - 1;
      }
      return newIndex;
    });
  };

  const handleRightArrowClick = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= shuffledProducts.length) {
        return 0;
      }
      return newIndex;
    });
  };

  const visibleProducts = [
    shuffledProducts[
      (startIndex + shuffledProducts.length - 1) % shuffledProducts.length
    ],
    shuffledProducts[startIndex],
    shuffledProducts[(startIndex + 1) % shuffledProducts.length],
  ];

  return (
    <div>
      <StyledBannerColors>
        <StyledBannerDiv>
          <StyledLeftButton onClick={handleLeftArrowClick}>
            {"<"}
          </StyledLeftButton>
          <StyledSmallDiv></StyledSmallDiv>
          {visibleProducts[0]?.id && <CardSmall id={visibleProducts[0].id} />}
          <StyledMediumDiv></StyledMediumDiv>
          {visibleProducts[1]?.id && <CardBig id={visibleProducts[1].id} />}
          <StyledMediumDiv></StyledMediumDiv>
          {visibleProducts[2]?.id && <CardSmall id={visibleProducts[2].id} />}
          <StyledSmallDiv></StyledSmallDiv>
          <StyledRightButton onClick={handleRightArrowClick}>
            {">"}
          </StyledRightButton>
        </StyledBannerDiv>
      </StyledBannerColors>
    </div>
  );
};

export default Banner;
