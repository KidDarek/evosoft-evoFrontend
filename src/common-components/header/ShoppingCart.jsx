import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context-providers/ProductContext";
import { CartItemsContext } from "../../context-providers/CartItemsContext";
import { styled } from "@mui/system";

const StyledClearText = styled("div")({
  color: "red",
  margin: "auto",
});

const StyledShopText = styled("div")({
  color: "#00cc99",
  margin: "auto",
});

const StyledEmptyCartText = styled("div")({
  textAlign: "center",
  width: "100%",
  margin: "auto",
  fontFamily: "Roboto",
});

const StyledEmptyMainText = styled("div")({
  fontWeight: "bold",
  fontSize: "15px",
});

const StyledEmptySideText = styled("div")({
  margin: "2px 10px 1px 10px",
  fontSize: "14px",
});

const StyledButton = styled("button")({
  backgroundColor: "#ff0055",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  marginLeft: "5px",
});

const StyledQuantityDiv = styled("div")({
  color: "#00cc99",
  marginRight: "5px",
});
const StyledImage = styled("img")({
  height: "25px",
  marginLeft: "5px",
});

const ShoppingCart = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { cartItems, removeFromCart, removeAllFromCart } =
    useContext(CartItemsContext);
  const [products, setProducts] = useState([]);

  const open = Boolean(anchorEl);

  const { getProductById } = React.useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const productPromises = cartItems.map(({ id }) => getProductById(id));
      const resolvedProducts = await Promise.all(productPromises);
      setProducts(resolvedProducts);
    };

    fetchProducts();
  }, [getProductById, cartItems]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const navigateToProductPage = (id) => {
    navigate(`/Product/${id}`);
    handleClose();
  };

  const navigateToShopPage = () => {
    navigate("/Shop");
    handleClose();
  };

  const removeItem = (e, id) => {
    e.stopPropagation();
    removeFromCart(id);
    setProducts(products.filter((product) => product.id !== id)); // Update products state to trigger re-render
  };

  const removeAllItems = () => {
    removeAllFromCart();
    setProducts([]); // Update products state to trigger re-render
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ width: 32, height: 32, bgcolor: "#ff0055" }}>
          <img
            src="/images/ShoppingCart.png"
            alt="ShoppingCart.png"
            style={{ width: "24px", height: "24px" }}
          ></img>
        </Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ width: "auto" }}
      >
        {products.length === 0 ? (
          <StyledEmptyCartText>
            <img
              src="/images/sadEmptyCart.png"
              alt="An empty cart"
              style={{ width: "26%" }}
            />
            <StyledEmptyMainText>Your cart is empty</StyledEmptyMainText>
            <StyledEmptySideText>
              Looks like you have not added <br></br>
              anything to your cart.
            </StyledEmptySideText>
          </StyledEmptyCartText>
        ) : (
          products.map((product, index) => {
            const { id, quantity } = cartItems[index];
            if (!product) {
              return null;
            }
            const key = `${id}-${quantity}`; // Generate a unique key
            return (
              <MenuItem key={key} onClick={() => navigateToProductPage(id)}>
                <StyledQuantityDiv>{quantity}x</StyledQuantityDiv>
                {product.title}
                <StyledImage
                  src={`data:image/png;base64,${product.imageData}`}
                  alt="Product.png"
                />
                <StyledButton onClick={(event) => removeItem(event, id)}>
                  X
                </StyledButton>
              </MenuItem>
            );
          })
        )}

        {products.length > 0 && (
          <MenuItem onClick={removeAllItems}>
            <StyledClearText>Clear all</StyledClearText>
          </MenuItem>
        )}

        {products.length > 0 && (
          <MenuItem onClick={navigateToShopPage}>
            <StyledShopText>Buy Items</StyledShopText>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default ShoppingCart;
