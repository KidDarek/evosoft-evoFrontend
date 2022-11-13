import React, {useState} from "react";
import evoButtonL from "./evoButtonL.png"
import evoButton from "./evoButton.png"
import { styled } from "@mui/material";
//import { useNavigate } from "react-router-dom";


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


const Banner1 =({
  border: "0",
  height: "400px",
  width: "100%",
  backgroundColor: "#00cc99"
});

const Banner2 =({
  border: "0",
  height: "400px",
  width: "100%",
  backgroundColor: "#ff0066"
});


const currentBanner = [Banner1,Banner2]

const SetNewBanner = () => {
  const [bannerIndex, setIndex] = useState(0)

 // const navigate = useNavigate();

  //const navigateToProductPage = () => {
 //   navigate("/Product");
//  };

  return(
    <div style={currentBanner[bannerIndex % currentBanner.length]}>
    <StyledLeftButton onClick={() => setIndex(bannerIndex - 1)}>
    <img src={evoButtonL}
    alt="Bal"
    width={"60px"}/>
    </StyledLeftButton>

    <StyledRightButton onClick={() => setIndex(bannerIndex + 1)}>
    <img src={evoButton}
    alt="Jobb"
    width={"60px"}/>
    </StyledRightButton>
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
