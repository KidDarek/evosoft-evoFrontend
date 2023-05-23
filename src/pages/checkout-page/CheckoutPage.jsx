import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Button, styled } from "@mui/material";
import {
  CartItemsContext,
  CartItemsContextProvider,
} from "../../context-providers/CartItemsContext";

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "top",
  justifyContent: "center",
  height: "100%",
  padding: "20px 20px 20px 20px",
  backgroundColor: "#00EFB3",
});

const StyledH3 = styled("h3")({
  margin: "1%",
  marginLeft: "0px",
  color: "white",
  fontSize: "25px",
});

const StyledTable = styled("table")({
  height: "fit-content",
  width: "20%",
  marginRight: "1%",
  background: "#00cc99",
  borderRadius: "15px",
  color: "white",
  padding: "15px 20px 20px 20px",
  fontSize: "20px",
  borderSpacing: "8px",
});

const CheckoutPageInside = () => {
  const { cartItems } = useContext(CartItemsContext);

  const location = useLocation();
  const grandTotal = location.state?.grandTotal;

  return (
    <>
      <StyledPageDiv>
        <StyledTable>
          <tbody>
            <tr>
              <StyledH3>Delivery</StyledH3>
            </tr>
            <tr>
              <input type="checkbox" checked="true" name="homeDelivery" />
              <label for="homeDelivery">Home delivery</label>
            </tr>
            <tr>
              <td colSpan="2">
                <StyledH3>Payment method</StyledH3>
              </td>
            </tr>
            <tr>
              <input type="checkbox" checked="true" name="cashOnDelivery" />
              <label for="cashOnDelivery">Cash on delivery</label>
            </tr>
            <tr>
              <td colSpan="2">
                <StyledH3>Delivery address</StyledH3>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="First name"
                  style={{ lineHeight: "20px" }}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Last name"
                  style={{ lineHeight: "20px" }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Email"
                  style={{ lineHeight: "20px" }}
                />
              </td>
              <td>
                <input
                  type="tel"
                  placeholder="Phone number"
                  style={{ lineHeight: "20px" }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Post code"
                  style={{ lineHeight: "20px" }}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="City"
                  style={{ lineHeight: "20px" }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input
                  type="text"
                  placeholder="Street, house number"
                  size="47"
                  style={{ lineHeight: "20px" }}
                />
              </td>
            </tr>
          </tbody>
        </StyledTable>
        {cartItems.length !== 0 ? (
          <StyledTable>
            <tbody>
              <tr>
                <StyledH3>Cart</StyledH3>
              </tr>
              <tr>
                <td colSpan="2">
                  <input
                    type="checkbox"
                    checked="false"
                    name="acceptPolicy"
                  />
                  <label for="acceptPolicy" style={{ fontSize: "15px" }}>
                    I would like to get emails about the best deals.
                  </label>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input
                    type="checkbox"
                    checked="false"
                    name="acceptPolicy"
                  />
                  <label for="acceptPolicy" style={{ fontSize: "15px" }}>
                    I have read and accepted that my order involves a payment
                    obligation, with ordering I agree to Terms of Service and
                    Privacy Policy.
                  </label>
                </td>
              </tr>
              <tr style={{ fontWeight: "bold" }}>
                <td>Grand total: </td>
                <td align="right">${grandTotal} </td>
              </tr>
              <tr>
                <td colSpan="3" align="center">
                  <Button
                    variant="contained"
                    color="green"
                    sx={{ width: 325 }}
                  >
                    Order
                  </Button>
                </td>
              </tr>
            </tbody>
          </StyledTable>
        ) : null}
      </StyledPageDiv>
    </>
  );
};

const CheckoutPage = () => {
  return (
    <>
      <CartItemsContextProvider>
        <CheckoutPageInside />
      </CartItemsContextProvider>
    </>
  );
};

export default CheckoutPage;
