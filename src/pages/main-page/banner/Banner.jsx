import React, { useState } from "react";
import { styled } from "@mui/material";
import CardSmall from "./CardSmall";
import CardBig from "./CardBig";
import { products } from "../../../db";


const StyledBannerDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "0",
  height: "400px",
  width: "100%",
})

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
    }
  },
  animation: "gradient 10s infinite ease",
  position: "static"

})


const StyledLeftButton = styled("button")({
  backgroundColor: "white",
  height: "400px",
  width: "8%",
  border: "none",
  opacity: "10%"
});

const StyledRightButton = styled("button")({
  backgroundColor: "white",
  height: "400px",
  width: "8%",
  float: "right",
  border: "none",
  opacity: "10%"
});



const SetNewBanner = () => {
  const [bannerIndex, setIndex] = useState(0)

  if (bannerIndex === -9) {
    setIndex(0)
  }


  return (

    <StyledBannerColors>
      <StyledBannerDiv>
        <StyledLeftButton onClick={() => setIndex(bannerIndex - 1)}>
        </StyledLeftButton>
        <div style={{ width: "5%", height: "400px" }}></div>
        <CardSmall id={(products.length + bannerIndex) % products.length} />
        <div style={{ width: "10%", height: "400px" }}></div>
        <CardBig id={(products.length + bannerIndex + 1) % products.length} />
        <div style={{ width: "10%", height: "400px" }}></div>
        <CardSmall id={(products.length + bannerIndex + 2) % products.length} />
        <div style={{ width: "5%", height: "400px" }}></div>
        <StyledRightButton onClick={() => setIndex(bannerIndex + 1)}>
        </StyledRightButton>
      </StyledBannerDiv>
    </StyledBannerColors>

  )
}


const Banner = () => {

  return (
    <>
      <SetNewBanner />
    </>
  );
};

export default Banner;
