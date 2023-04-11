import { Button, styled } from "@mui/material";
import React from "react";
import { products } from "../../DataBaseLoader";
import Card from "../main-page/best-deals/Card";

const StyledContainer = styled("div")({
  marginTop: "25px",
  marginLeft: "25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
});

const StyledDiv = styled("div")({
  marginTop: "25px",
  marginLeft: "25px",
  fontSize: "50px",
  color: "#00cc99",
});


let shoppingItems;
const RefreshShoppingItems = () => {
  shoppingItems = JSON.parse(localStorage.getItem("shoppingItems")) ?? [];
};

let total;
const CalculateTotal = () => {
  total = 0;
  for (let i = 0; i < shoppingItems.length; i++) {
    total += shoppingItems[i].quantity * shoppingItems[i].price;
  }
};

const ShopPage = () => {
  RefreshShoppingItems();
  CalculateTotal();
  return (
    <>
      {shoppingItems.length !== 0
        ? shoppingItems.map(({ id, quantity }) => (
          <StyledContainer key={id}>
            <Card id={id} />
            <StyledDiv>x{quantity}</StyledDiv>
            <StyledDiv>= ${quantity * products[id].price}</StyledDiv>
          </StyledContainer>
        ))
        : null}
      {shoppingItems.length !== 0 ? (
        <StyledDiv>
          Your total is: ${total}{" "}
          <Button variant="contained" color="green">
            Continue
          </Button>
        </StyledDiv>
      ) : null}
    </>
  );
};

export default ShopPage;
