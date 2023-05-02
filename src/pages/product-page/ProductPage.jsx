import styled from "@emotion/styled";
import React from "react";
import { useParams } from "react-router-dom";
import { products, users } from "../../DataBaseLoader";
import MUIButton from "@mui/material/Button";
import { createTheme, TextField, ThemeProvider, Chip } from "@mui/material";

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "20px 25px 10px 25px",
  backgroundColor: "#00EFB3",
});

const StyledInfoDiv = styled("div")({
  width: "60%",
  display: "flex",
  justifyContent: "center",
  border: "10px solid grey",
  backgroundColor: "#00cc99",
});

const StyledInfoDivText = styled("div")({
  width: "16%",
  alignItems: "start",
  display: "flex",
  paddingLeft: "15px",
  paddingRight: "10px",
  justifyContent: "start",
  height: "745px",
  margin: "0px 75px 0px 15px",
  backgroundColor: "#00cc99",
});

const StyledInfoDivText2 = styled("div")({
  width: "79%",
  marginRight: "75px",
  marginTop: "-15px",
  alignItems: "start",
  display: "flex",
  justifyContent: "start",
  height: "100%",
  padding: "0px 0px 20px 15px",
  backgroundColor: "#00cc99",
});

const StyledImage = styled("img")({
  height: "auto",
  width: "auto",
  maxWidth: "100%",
  maxHeight: "100%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
});

const BasicTheme = createTheme({
  palette: {
    green: {
      main: "#00cc99",
      contrastText: "#fff",
    },
    red: {
      main: "#ff0055",
      dark: "#990033",
      contrastText: "#fff",
    },
    white: {
      main: "#FFFFFF",
    },
  },
});

const AddItemToShoppingCart = (id) => {
  let shoppingItems =
    JSON.parse(localStorage.getItem("shoppingItems")) === null
      ? []
      : JSON.parse(localStorage.getItem("shoppingItems"));
  const itemQuantityInput = document.getElementById("item-quantity");
  const quantity = parseInt(itemQuantityInput.value);
  const price = products[id].price;
  if (quantity === 0) {
    return;
  }
  id = parseInt(id);
  for (let index = 0; index < shoppingItems.length; index++) {
    if (shoppingItems[index].id === id) {
      return;
    }
  }
  const shoppingItem = { id, quantity, price };
  shoppingItems.push(shoppingItem);
  localStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));
};

const ProductPage = (props) => {
  const [value, setValue] = React.useState("1");

  let accountRole = users[0].role;
  console.log(accountRole);

  const params = useParams();
  const id = params.id;
  return (
    <>
      <ThemeProvider theme={BasicTheme}>
        <StyledPageDiv>
          <StyledInfoDiv>
            <div>
              <StyledImage src={products[id].imageUri} alt="kep" />
            </div>
          </StyledInfoDiv>
          <StyledInfoDivText>
            <div>
              <h2 style={{ color: "white" }}>Product name:</h2>
              <div style={{ color: "white" }}> {products[id].title}</div>
              <h2 style={{ color: "white" }}>Price:</h2>
              <div style={{ color: "white" }}> {products[id].price}</div>
              <h2 style={{ color: "white" }}>Category:</h2>
              <div style={{ color: "white" }}> {products[id].category}</div>
              <h2 style={{ color: "white" }}>Tags:</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {products[id].tag.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                  />
                ))}
              </div>
              <div style={{ paddingTop: "20px", paddingBottom: "15px" }}>
                <TextField
                  focused
                  margin="dense"
                  id="item-quantity"
                  label="Quantity"
                  type="number"
                  variant="outlined"
                  color="white"
                  sx={{ width: 150 }}
                  inputProps={{ style: { color: "white" } }}
                  value={value}
                  onChange={(e) => {
                    var value = parseInt(e.target.value, 10);
                    if (isNaN(value)) {
                      value = 1;
                    }

                    if (value > 100) value = 100;
                    if (value < 1) value = 1;

                    setValue(value);
                  }}
                />
              </div>
              <div>
                <MUIButton
                  variant="contained"
                  onClick={() => AddItemToShoppingCart(id)}
                >
                  {" "}
                  Add item to cart{" "}
                </MUIButton>
              </div>
            </div>
          </StyledInfoDivText>
        </StyledPageDiv>
        <StyledPageDiv>
          <StyledInfoDivText2>
            <div>
              <h1 style={{ color: "white" }}>Product description</h1>
              <div style={{ color: "white" }}>{products[id].body}</div>
            </div>
          </StyledInfoDivText2>
        </StyledPageDiv>
      </ThemeProvider>
    </>
  );
};

export default ProductPage;
