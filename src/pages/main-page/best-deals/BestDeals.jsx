import { Grid } from "@mui/material";
import React from "react";
import Card from "./Card";
import { styled } from "@mui/material";
import { products } from "../../../db";

const StyledPadding = styled("div")({
  paddingLeft: "9rem",
  paddingRight: "9rem",
});

const ReturnProductsByCategory = () => {

  let filtered = [];
  
  products.map((product) => (
    !filtered.includes(product.category) ?
    filtered.push(product.category) : null
  ))

  return (
    filtered.map((category) => (
      <>
      <h2>{category}:</h2>
      <hr style={{marginBottom: "2rem"}}/>
      <Grid container spacing={30} justifyContent="center">
      {
        products.map((product) => (
          product.category === category ?
          <Grid item xs="auto" md="auto" key={product.id}>
            <Card
              title={product.title}
              imageUri={product.imageUri}
              body={product.body}
              price={product.price}
            />
          </Grid> : null
        ))
      }
      </Grid>
      </>
    ))
  )

}

const BestDealsPage = () => {
  return (
    <>
      <StyledPadding>
      <ReturnProductsByCategory />
      </StyledPadding>
    </>
  );
};

export default BestDealsPage;
