import { Grid } from "@mui/material";
import React from "react";
import Card from "./Card";
import { styled } from "@mui/material";
import { products } from "../../../db";

const StyledPadding = styled("div")({
  paddingLeft: "9rem",
  paddingRight: "9rem",
});

const ReturnTwoRandomProductByCategory = () => {
  // Filtering all products categories and putting it in an array
  let filtered = [];
  products.map((product) =>
    !filtered.includes(product.category)
      ? filtered.push(product.category)
      : null
  );

  // Choosing two random category which can not be a duplicate
  let twoRandom = [];
  let randomNumber = null;
  for (let i = 0; i < filtered.length - 1; i++) {
    if (twoRandom.includes(filtered[randomNumber]) || randomNumber === null) {
      i--;
      randomNumber = Math.floor(Math.random() * (filtered.length - 1 + 1));
    } else {
      twoRandom.push(filtered[randomNumber]);
    }
  }

  // Returning category names with it's assigned items
  return twoRandom.map((category) => (
    <>
      <h2>{category}:</h2>
      <hr style={{ marginBottom: "2rem" }} />
      <Grid container spacing={20} justifyContent="center">
        {products.map((product) =>
          product.category === category ? (
            <Grid item xs="auto" md="auto" key={product.id}>
              <Card id={product.id} />
            </Grid>
          ) : null
        )}
      </Grid>
    </>
  ));
};

const BestDealsPage = () => {
  return (
    <>
      <StyledPadding>
        <ReturnTwoRandomProductByCategory />
      </StyledPadding>
    </>
  );
};

export default BestDealsPage;
