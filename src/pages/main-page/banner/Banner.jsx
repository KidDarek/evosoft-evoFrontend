import React from "react";
import evoButtonL from "./evoButtonL.png"
import evoButton from "./evoButton.png"


const LeftButton =({
  backgroundColor: "Transparent",
  height: "400px",
  width: "60px",
  marginLeft: "25px",
  border: "none",
});

const RightButton =({
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

let IndexCount = 0;


const indexPlus = () => {
  IndexCount++
  
}
const indexMinus = () => {
  IndexCount--
}

const Banner = () => {
  return (
    <>
      <div id="BannerPic" style={currentBanner[IndexCount]}>
        
        <button style={LeftButton} onClick={indexMinus()}>
        <img src={evoButtonL}
        alt="Bal"
        width={"60px"}/>
        </button>

        <button style={RightButton} onClick={indexPlus()}>
        <img src={evoButton}
        alt="Jobb"
        width={"60px"}/>
        </button>

      </div>
    </>
  );
};

export default Banner;
