import React, {useState} from "react";
import evoButtonL from "./evoButtonL.png"
import evoButton from "./evoButton.png"
import { styled } from "@mui/material";
import { products } from "../../../db";
import Card from "../best-deals/Card";
import CardBig from "./CardBig";




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


const banner=({
  border: "0",
  height: "400px",
  width: "100%",
  backgroundImage: "linear-gradient(to right,#ff0055, #0066ff, #00cc99)",
});



const product = products

const SetNewBanner = () => {
  const [bannerIndex, setIndex] = useState(0)

  const amountOfProd = product.length

  return(
   
    <div style={banner}>
      <StyledBannerDiv>
      <StyledLeftButton onClick={() => setIndex(bannerIndex - 1)}>
        <img src={evoButtonL}
          alt="Bal"
          width={"60px"} />
      </StyledLeftButton>
      <div style={{width: "5%", height: "400px"}}></div>
      <Card 
        title={product[[(amountOfProd+bannerIndex) % amountOfProd]].title}
        imageUri={product[[(amountOfProd+bannerIndex) % amountOfProd]].imageUri}
        body={product[[(amountOfProd+bannerIndex) % amountOfProd]].body}
        price={product[[(amountOfProd+bannerIndex) % amountOfProd]].price}
      />
      <div style={{width: "10%", height: "400px"}}></div>
      <CardBig
        title={product[[(amountOfProd+bannerIndex + 1) % amountOfProd]].title}
        imageUri={product[[(amountOfProd+bannerIndex + 1) % amountOfProd]].imageUri}
        body={product[[(amountOfProd+bannerIndex + 1) % amountOfProd]].body}
        price={product[[(amountOfProd+bannerIndex + 1) % amountOfProd]].price}
      />
      <div style={{width: "10%", height: "400px"}}></div>
      <Card
        title={product[[(amountOfProd+bannerIndex + 2)% amountOfProd]].title}
        imageUri={product[[(amountOfProd+bannerIndex + 2) % amountOfProd]].imageUri}
        body={product[[(amountOfProd+bannerIndex + 2) % amountOfProd]].body}
        price={product[[(amountOfProd+bannerIndex + 2) % amountOfProd]].price}
      />
      <div style={{width: "5%", height: "400px"}}></div>
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
    <SetNewBanner/>
    </>
  );
};

export default Banner;
