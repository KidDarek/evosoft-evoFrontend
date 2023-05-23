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
import { TextField, Chip } from "@mui/material";

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
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {product.tags.map((tag) => (
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
                onClick={() => addItemToShoppingCart(product, value)}
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
            <div style={{ color: "white" }}>{product.body}</div>
          </div>
        </StyledInfoDivText2>
      </StyledPageDiv>
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
