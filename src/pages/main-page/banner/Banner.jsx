import React, { useState } from "react";
import evoButtonL from "./evoButtonL.png"
import evoButton from "./evoButton.png"
import { styled } from "@mui/material";
import CardSmall from "./CardSmall";
import CardBig from "./CardBig";
import { products } from "../../../db";


const StyledBannerDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: '100%',

})


const StyledLeftButton = styled("button")({
  backgroundColor: "Transparent",
  height: "400px",
  width: "60px",
  marginLeft: "25px",
  border: "none",
});

const StyledRightButton = styled("button")({
  backgroundColor: "Transparent",
  height: "400px",
  width: "60px",
  marginRight: "25px",
  float: "right",
  border: "none",
});


const banner = ({
  border: "0",
  height: "400px",
  width: "100%",
  backgroundImage: "linear-gradient(to right,#ff0055, #0066ff, #00cc99)",
});


const SetNewBanner = () => {
  const [bannerIndex, setIndex] = useState(0)

  if (bannerIndex < 0) {
    setIndex(0)
  }
  if (bannerIndex > products.length - 3) {
    setIndex(products.length - 3)
  }


  return (

    <div style={banner}>
      <StyledBannerDiv>
        <StyledLeftButton onClick={() => setIndex(bannerIndex - 1)}>
          <img src={evoButtonL}
            alt="Bal"
            width={"60px"} />
        </StyledLeftButton>
        <div style={{ width: "5%", height: "400px" }}></div>
        <CardSmall id={bannerIndex} />
        <div style={{ width: "10%", height: "400px" }}></div>
        <CardBig id={bannerIndex + 1} />
        <div style={{ width: "10%", height: "400px" }}></div>
        <CardSmall id={bannerIndex + 2} />
        <div style={{ width: "5%", height: "400px" }}></div>
        <StyledRightButton onClick={() => setIndex(bannerIndex + 1)}>
          <img src={evoButton}
            alt="Jobb"
            width={"60px"} />
        </StyledRightButton>
      </StyledBannerDiv>
    </div>

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
