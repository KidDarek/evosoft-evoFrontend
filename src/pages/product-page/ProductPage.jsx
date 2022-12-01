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
  padding: "25px",
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
  width: "100%",
  marginLeft: "150px",
  alignItems: "start",
  display: "flex",
  justifyContent: "start",
  height: "100%",
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
              Product name: {products[id].title}
            </h2>
            <h2 style={{ color: "white" }}>
              Price: {products[id].price}
            </h2>
            <h2 style={{ color: "white" }}>
              Category: {products[id].category}
            </h2>
            <h2 style={{ color: "white" }}>
              Tags: {products[id].tag}
            </h2>
            <div>
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
