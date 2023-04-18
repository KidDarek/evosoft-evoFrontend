import { Button, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../DataBaseLoader";
import MiniCard from "./MiniCard";

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "top",
  justifyContent: "center",
  height: "100%",
  padding: "15px 25px 15px 25px",
  backgroundColor: "#00EFB3",
});

const StyledDiv = styled("div")({
  width: "10%",
  marginLeft: "40px",
  fontSize: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#00cc99",
  padding: "10px 25px 10px 25px",
  borderRadius: "15px",
  color: "white",
});

const StyledBigTable = styled("table")({
  width: "65%",
  height: "fit-content",
  background: "#00cc99",
  borderRadius: "15px",
  color: "white",
  padding: "20px 20px 20px 40px",
  fontSize: "25px",
  fontWeight: "bold",
});

const StyledSmallTable = styled("table")({
  width: "15%",
  height: "fit-content",
  marginLeft: "20px",
  background: "#00cc99",
  borderRadius: "15px",
  color: "white",
  padding: "8px 10px 10px 8px",
  borderSpacing: "8px",
  fontSize: "22px",
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
  const navigate = useNavigate();

  const navigateToCheckoutPage = () => {
    navigate(`/Checkout`);
  };

  RefreshShoppingItems();
  CalculateTotal();
  return (
    <>
        <StyledPageDiv>
          <StyledBigTable>
            <tbody>
              <div>
                <tr>
                  <th align="left" width="75%">
                    Product
                  </th>
                  <th align="center">Quantity</th>
                  <th align="center" width="25%">
                    Price
                  </th>
                </tr>
              </div>
              {shoppingItems.length !== 0
                ? shoppingItems.map(({ id, quantity }) => (
                    <div key={id}>
                      <tr valign="middle">
                        <td>
                          <MiniCard id={id} />
                        </td>
                        <td rowSpan="3" width="17%">
                          <StyledDiv>x{quantity}</StyledDiv>
                        </td>
                        <td rowSpan="3">
                          <StyledDiv>
                            ${quantity * products[id].price}
                          </StyledDiv>
                        </td>
                      </tr>
                    </div>
                  ))
                : null}
            </tbody>
          </StyledBigTable>
          {shoppingItems.length !== 0 ? (
            <StyledSmallTable>
              <tbody>
                <tr>
                  <th style={{ textAlign: "left", fontSize: "26px" }}>Total</th>
                </tr>
                <tr>
                  <td>Subtotal: </td>
                  <td align="right">${total} </td>
                </tr>
                <tr>
                  <td>Delivery: </td>
                  <td align="right">${5} </td>
                </tr>
                <tr style={{ fontWeight: "bold" }}>
                  <td>Grand total: </td>
                  <td align="right">${total + 5} </td>
                </tr>
                <tr>
                  <td colSpan="3" align="center">
                    <Button
                      variant="contained"
                      color="green"
                      sx={{ width: 230 }}
                      onClick={navigateToCheckoutPage}
                    >
                      Continue
                    </Button>
                  </td>
                </tr>
              </tbody>
            </StyledSmallTable>
          ) : null}
        </StyledPageDiv>
    </>
  );
};

export default ShopPage;
