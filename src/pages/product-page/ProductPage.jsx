import styled from "@emotion/styled";
import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { createTheme, TextField, ThemeProvider, Chip } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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

const ProductPageInside = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("1");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let accountRole = users[0].role;
  console.log(accountRole);

  const params = useParams();

  const { getProductById, removeProduct } = useContext(ProductContext);
  const { cartItems, addToCart, removeFromCart } = useContext(CartItemsContext);
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

  const deleteProduct = async (id) => {
    const inCart = cartItems.find((item) => item.id === id);
    if (inCart) {
      removeFromCart(id);
      console.log("Hello");
    }
    await removeProduct(id);
    handleClose();
    navigate(`/Search`);
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
              <div style={{ paddingBottom: "15px" }}>
                <MUIButton
                  variant="contained"
                  onClick={() => addItemToShoppingCart(product, value)}
                >
                  {" "}
                  Add item to cart{" "}
                </MUIButton>
              </div>
              <div>
                <MUIButton
                  sx={{ bgcolor: "#ff0000" }}
                  variant="contained"
                  onClick={handleClickOpen}
                >
                  {" "}
                  Delete product{" "}
                </MUIButton>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle id="alertDialogTitle">
                    {"Are you sure you want to delete " + product.title + "?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Once you delete this product, all associated data will be
                      permanently removed from the system. This action cannot be
                      undone.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      color="red"
                      onClick={() => deleteProduct(product.id)}
                      autoFocus
                    >
                      Delete
                    </Button>
                    <Button onClick={handleClose}>Cancel</Button>
                  </DialogActions>
                </Dialog>
              </div>
              <div></div>
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
