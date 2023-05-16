import React, { useContext, useEffect, useState } from "react";
import { Button, createTheme, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ProductContext,
  ProductContextProvider,
} from "../../context-providers/ProductContext";
import {
  CartItemsContext,
  CartItemsContextProvider,
} from "../../context-providers/CartItemsContext";
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


const ShopPageInside = () => {
  const navigate = useNavigate();
  const { getProductById } = useContext(ProductContext);
  const { cartItems } = useContext(CartItemsContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemPrices, setItemPrices] = useState([]);

  useEffect(() => {
    const calculateItemPrices = async () => {
      const prices = await Promise.all(
        cartItems.map(async ({ id, quantity }) => {
          const product = await getProductById(id);
          return product ? product.price * quantity : 0;
        })
      );

      setItemPrices(prices);
    };

    calculateItemPrices();
  }, [cartItems, getProductById]);

  useEffect(() => {
    const subtotal = itemPrices.reduce((acc, price) => acc + price, 0);
    setTotalPrice(subtotal);
  }, [itemPrices]);

  const navigateToCheckoutPage = () => {
    navigate(`/Checkout`, { state: { grandTotal: totalPrice + 5 } });
  };

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
              {cartItems.length !== 0 &&
                cartItems.map(({ id, quantity }, index) => (
                  <div key={id}>
                    <tr valign="middle">
                      <td>
                        <MiniCard id={id} />
                      </td>
                      <td rowSpan="3" width="17%">
                        <StyledDiv>x{quantity}</StyledDiv>
                      </td>
                      <td rowSpan="3">
                        <StyledDiv>${itemPrices[index]}</StyledDiv>
                      </td>
                    </tr>
                  </div>
                ))}
            </tbody>
          </StyledBigTable>
          {cartItems.length !== 0 ? (
            <StyledSmallTable>
              <tbody>
                <tr>
                  <th style={{ textAlign: "left", fontSize: "26px" }}>Total</th>
                </tr>
                <tr>
                  <td>Subtotal: </td>
                  <td align="right">${totalPrice}</td>
                </tr>
                <tr>
                  <td>Delivery: </td>
                  <td align="right">${5}</td>
                </tr>
                <tr style={{ fontWeight: "bold" }}>
                  <td>Grand total: </td>
                  <td align="right">${totalPrice + 5}</td>
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

const ShopPage = () => {
  return (
    <>
      <ProductContextProvider>
        <CartItemsContextProvider>
          <ShopPageInside />
        </CartItemsContextProvider>
      </ProductContextProvider>
    </>
  );
};

export default ShopPage;
