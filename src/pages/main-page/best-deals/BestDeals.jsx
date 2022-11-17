import { Grid } from "@mui/material";
import React from "react";
import Card from "./Card";
import { styled } from "@mui/material";
import { products } from "../../../db"
//import linq from "linq";


const CardFiller = (props) => {
  return (
    <Grid item xs="auto" md="auto">
      <Card
        title = {props.title}
        imageUri = {props.imageUri}
        body = {props.body}
        price = {props.price}
      />
    </Grid>
  )
};

const RequestDatabase = () => {
  
  products.forEach(product => {
    <CardFiller 
    title = {product.title}
    imageUri = {product.imageUri}
    body = {product.body}
    price = {product.price}
    />
  });

};

const StyledPadding = styled("div")({
  paddingLeft: "3rem",
  paddingRight: "3rem",
});


const BestDealsPage = () => {

  return (
    <>
    <StyledPadding>
      <RequestDatabase />
    </StyledPadding>
    </>
  );
  };

export default BestDealsPage;
