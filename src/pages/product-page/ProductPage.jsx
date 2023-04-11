import styled from "@emotion/styled";
import React from "react";
import { useParams } from "react-router-dom";
import { products, users } from "../../DataBaseLoader";
import MUIButton from "@mui/material/Button";
import { TextField } from "@mui/material";

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "10px 25px 10px 25px",
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
  width: "300px",
  alignItems: "start",
  display: "flex",
  paddingLeft: "10px",
  justifyContent: "start",
  height: "800px",
  marginRight: "75px",
  marginLeft: "10px",
  paddingTop: "10px",
  paddingBottom: "10px",
  backgroundColor: "#00cc99",
});

const StyledInfoDivText2 = styled("div")({
  width: "79%",
  marginRight: "75px",
  alignItems: "start",
  display: "flex",
  justifyContent: "start",
  height: "100%",
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
            <div style={{ color: "white" }}>
              {products[id].tag.map((i) => i + ", ")}
            </div>
            <div style={{ paddingTop: "20px" }}>
              <MUIButton
                variant="contained"
                onClick={() => AddItemToShoppingCart(id)}
              >
                {" "}
                Add item to cart{" "}
              </MUIButton>
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
          </div>
        </StyledInfoDivText>
      </StyledPageDiv>
      <StyledPageDiv>
        <StyledInfoDivText2>
          <div>
            <h1 style={{ color: "white" }}>Termék leírása</h1>
            <div style={{ color: "white" }}>{products[id].body}</div>
          </div>
        </StyledInfoDivText2>
      </StyledPageDiv>
    </>
  );
};

export default ProductPage;
