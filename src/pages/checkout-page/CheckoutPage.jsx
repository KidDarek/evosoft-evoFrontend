import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
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

const StyledLabel = styled("label")({
  fontSize: "15px",
});

const CheckoutPageInside = () => {
  const { cartItems } = useContext(CartItemsContext);

  const location = useLocation();
  const grandTotal = location.state?.grandTotal;

  const [geolocation, setGeolocation] = useState(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setGeolocation({ latitude, longitude });
        },
        (error) => {
          //console.error("Error getting geolocation:", error);
        }
      );
    } else {
      //console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const getAddressFromGeolocation = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      if (response.ok) {
        const data = await response.json();
        const { address } = data;
        // Update the address fields with the retrieved data
        document.getElementById("postcode").value = address?.postcode || "";
        document.getElementById("road").value = address?.road || "";

        const cityAndCountry = `${address?.city || ""}, ${
          address?.country || ""
        }`;
        document.getElementById("city").value = cityAndCountry;

        const roadAndHouseNumber = `${address?.road || ""} ${
          address?.house_number || ""
        }`;
        document.getElementById("road").value = roadAndHouseNumber;
      } else {
        console.error("Error retrieving address from geolocation.");
      }
    } catch (error) {
      console.error("Error retrieving address from geolocation:", error);
    }
  };
  useEffect(() => {
    if (geolocation) {
      getAddressFromGeolocation(geolocation.latitude, geolocation.longitude);
    }
  }, [geolocation]);

  return (
    <>
      <StyledPageDiv>
        <StyledTable>
          <tbody>
            <tr>
              <td>
                <StyledH3>Delivery</StyledH3>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={true}
                  name="homeDelivery"
                />
                <label htmlFor="homeDelivery">Home delivery</label>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <StyledH3>Payment method</StyledH3>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={true}
                  name="cashOnDelivery"
                />
                <label htmlFor="cashOnDelivery">Cash on delivery</label>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <StyledH3>Delivery address</StyledH3>
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  label="First name"
                  type="text"
                  variant="outlined"
                  focused
                  color="white"
                  inputProps={{ style: { color: "white" } }}
                  sx={{ minWidth: "100px" }}
                />
              </td>
              <td>
                <TextField
                  label="Last name"
                  type="text"
                  variant="outlined"
                  focused
                  color="white"
                  inputProps={{ style: { color: "white" } }}
                  sx={{ minWidth: "100px" }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  label="Email"
                  type="text"
                  variant="outlined"
                  focused
                  color="white"
                  inputProps={{ style: { color: "white" } }}
                  sx={{ minWidth: "100px" }}
                />
              </td>
              <td>
                <TextField
                  label="Phone number"
                  type="tel"
                  variant="outlined"
                  focused
                  color="white"
                  inputProps={{ style: { color: "white" } }}
                  sx={{ minWidth: "100px" }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  id="postcode"
                  label="Post code"
                  type="text"
                  variant="outlined"
                  focused
                  color="white"
                  inputProps={{ style: { color: "white" } }}
                  sx={{ minWidth: "100px" }}
                />
              </td>
              <td>
                <TextField
                  id="city"
                  label="City"
                  type="text"
                  variant="outlined"
                  focused
                  color="white"
                  inputProps={{ style: { color: "white" } }}
                  sx={{ minWidth: "100px" }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <TextField
                  id="road"
                  label="Street, house number"
                  type="text"
                  variant="outlined"
                  focused
                  color="white"
                  inputProps={{ style: { color: "white" } }}
                  sx={{ minWidth: "100px" }}
                  fullWidth
                />
              </td>
            </tr>
          </tbody>
        </StyledTable>
        {cartItems.length !== 0 ? (
          <StyledTable>
            <tbody>
              <tr>
                <td>
                  <StyledH3>Cart</StyledH3>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    name="acceptPolicy"
                  />
                  <StyledLabel htmlFor="acceptPolicy">
                    I would like to get emails about the best deals.
                  </StyledLabel>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    name="acceptPolicy"
                  />
                  <StyledLabel htmlFor="acceptPolicy">
                    I have read and accepted that my order involves a payment
                    obligation, with ordering I agree to Terms of Service and
                    Privacy Policy.
                  </StyledLabel>
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
                    color="red"
                    sx={{ width: "100%" }}
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
