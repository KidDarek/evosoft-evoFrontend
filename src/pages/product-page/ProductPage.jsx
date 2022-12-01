import styled from "@emotion/styled";
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../db";
import MUIButton from "@mui/material/Button";

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "10px 25px 10px 25px",
  backgroundImage: "linear-gradient(to right, #00cc99, #0066ff, #ff0055)",
});

const StyledInfoDiv = styled("div")({
  width: "60%",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  height: "800px",
  border: "10px solid grey"
});

const StyledInfoDivText = styled("div")({
  width: "300px",
  alignItems: "start",
  display: "flex",
  paddingLeft: "10px",
  justifyContent: "start",
  height: "800px",
  marginRight: "75px",
  marginLeft: "10px",
  paddingTop: "10px",
  paddingBottom: "10px",
  backgroundColor: "#00cc99",
});

const StyledInfoDivText2 = styled("div")({
  width: "79%",
  marginRight: "75px",
  alignItems: "start",
  display: "flex",
  justifyContent: "start",
  height: "100%",
  backgroundColor: "#00cc99",
});


const ProductPage = (props) => {
  const params = useParams();
  const id = params.id
  return (
    <>
      <StyledPageDiv>
        <StyledInfoDiv>
          <div>
            <img
              src={products[id].imageUri}
              alt="kep"
              height="450px"
              frame="true"
              display="block"
              margin-left="auto"
              margin-right="auto"
            />
          </div>
        </StyledInfoDiv>
        <StyledInfoDivText>
          <div>
            <h2 style={{ color: "white" }}>
              Product name:
            </h2>
            <text style={{ color: "white" }}> {products[id].title}</text>
            <h2 style={{ color: "white" }}>
              Price:
            </h2>
            <text style={{ color: "white" }}> {products[id].price}</text>
            <h2 style={{ color: "white" }}>
              Category:
            </h2>
            <text style={{ color: "white" }}> {products[id].category}</text>
            <h2 style={{ color: "white" }}>
              Tags:
            </h2>
            <text style={{ color: "white" }}>  {products[id].tag}</text>
            <div style={{ paddingTop: "20px" }}>
              <MUIButton variant="contained"> Add item to cart </MUIButton>
            </div>
          </div>

        </StyledInfoDivText>
      </StyledPageDiv>
      <StyledPageDiv>
        <StyledInfoDivText2>
          <div>
            <h1 style={{ color: "white" }}>Termék leírása</h1>
            <text>{products[id].body}</text>
          </div>
        </StyledInfoDivText2>
      </StyledPageDiv>
    </>
  );
};

export default ProductPage;
