import styled from "@emotion/styled";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { users } from "../../db";
import {
  ProductContext,
  ProductContextProvider,
} from "../../context-providers/ProductContext";
import {
  CartItemsContext,
  CartItemsContextProvider,
} from "../../context-providers/CartItemsContext";
import MUIButton from "@mui/material/Button";
import { createTheme, TextField, ThemeProvider } from "@mui/material";

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

const ProductPageInside = () => {
  const [value, setValue] = React.useState("1");

  let accountRole = users[0].role;
  console.log(accountRole);

  const params = useParams();

  const { getProductById } = useContext(ProductContext);
  const { addToCart } = useContext(CartItemsContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(params.id);
      setProduct(product);
    };
    fetchProduct();
  }, [params.id, getProductById]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const addItemToShoppingCart = (product, value) => {
    product.quantity = value;

    addToCart(product); // Call the addToCart function from the CartItemsContext
  };

  return (
    <>
      <ThemeProvider theme={BasicTheme}>
        <StyledPageDiv>
          <StyledInfoDiv>
            <div>
              <StyledImage src={product.imageUri} alt="kep" />
            </div>
          </StyledInfoDiv>
          <StyledInfoDivText>
            <div>
              <h2 style={{ color: "white" }}>Product name:</h2>
              <div style={{ color: "white" }}> {product.title}</div>
              <h2 style={{ color: "white" }}>Price:</h2>
              <div style={{ color: "white" }}> {product.price}</div>
              <h2 style={{ color: "white" }}>Category:</h2>
              <div style={{ color: "white" }}> {product.category}</div>
              <h2 style={{ color: "white" }}>Tags:</h2>
              <div style={{ color: "white" }}>
                {product.tags.map((i) => i + ", ")}
              </div>
              <div style={{ paddingTop: "20px" }}>
                <MUIButton
                  variant="contained"
                  onClick={() => addItemToShoppingCart(product, value)}
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
              <div style={{ color: "white" }}>{product.body}</div>
            </div>
          </StyledInfoDivText2>
        </StyledPageDiv>
      </ThemeProvider>
    </>
  );
};

const ProductPage = () => {
  return (
    <>
      <ProductContextProvider>
        <CartItemsContextProvider>
          <ProductPageInside />
        </CartItemsContextProvider>
      </ProductContextProvider>
    </>
  );
};

export default ProductPage;
