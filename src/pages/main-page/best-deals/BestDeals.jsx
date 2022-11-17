import { Grid } from "@mui/material";
import React from "react";
import Card from "./Card";
import { styled } from "@mui/material";
import { products } from "../../../db";
//import linq from "linq";

const CardFiller = (props) => {
  return (
    <Grid item xs="auto" md="auto">
      <Card
        title={props.title}
        imageUri={props.imageUri}
        body={props.body}
        price={props.price}
      />
    </Grid>
  );
};

const RequestDatabase = products.forEach((product) => {
  <CardFiller
    title={product.title}
    imageUri={product.imageUri}
    body={product.body}
    price={product.price}
  />;
});

// };

const StyledPadding = styled("div")({
  paddingLeft: "3rem",
  paddingRight: "3rem",
});

const BestDealsPage = () => {
  return (
    <>
      <StyledPadding>
        <h2>Computers:</h2>

        <Grid container spacing={10} justifyContent="center">
          {/* <CardFiller 
          title = "Wooden PC"
          imageUri = "https://i.imgur.com/sJWUwiO.jpeg"
          body = "Pray it won't catch on fire!"
          price = "$1000"
          />
          <CardFiller 
          title = "Wooden PC"
          imageUri = "https://i.imgur.com/sJWUwiO.jpeg"
          body = "Pray it won't catch on fire!"
          price = "$1000"
          />
          <CardFiller 
          title = "Wooden PC"
          imageUri = "https://i.imgur.com/sJWUwiO.jpeg"
          body = "Pray it won't catch on fire!"
          price = "$1000"
        /> */}
          {/* <RequestDatabase /> */}
          {products.map((product) => (
            <CardFiller
              title={product.title}
              imageUri={product.imageUri}
              body={product.body}
              price={product.price}
            />
          ))}
        </Grid>
      </StyledPadding>
    </>
  );
};

export default BestDealsPage;
