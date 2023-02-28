import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { products } from '../../db';
import { styled } from '@mui/system';

const StyledClearText = styled("div")({
    color: "red",
    margin: "auto"
});

const StyledShopText = styled("div")({
    color: "#00cc99",
    margin: "auto"
});

const StyledNothingText = styled("div")({
    margin: "2px",
    fontSize: "13px"
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
    marginRight: "5px"
});
const StyledImage = styled("img")({
    height: "25px",
    marginLeft: "5px"
});

const ShoppingCart = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const [refresh, setRefresh] = React.useState(false);

    const open = Boolean(anchorEl);

    const shoppingItems = JSON.parse(localStorage.getItem("shoppingItems")) === null ? [] : JSON.parse(localStorage.getItem("shoppingItems"));

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

    const navigateToShopPage = (id) => {
        navigate("/Shop");
        handleClose();
    };

    const removeItem = (e, id) => {
        e.stopPropagation();
        let shoppingItems = JSON.parse(localStorage.getItem("shoppingItems"));
        let index = 0;
        for (let i = 0; i < shoppingItems.length; i++) {
            if (shoppingItems[i].id === id) {
                index = i;
                break;
            }
        }
        shoppingItems.splice(index, 1);
        localStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));
        setRefresh(!refresh);
    };

    const removeAllItems = () => {
        localStorage.removeItem("shoppingItems");
        setRefresh(!refresh);
    };

    return (

        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar sx={{ width: 32, height: 32, bgcolor: "#ff0055" }}>{<img src="/images/ShoppingCart.png" alt='ShoppingCart.png' style={{ width: "24px", height: "24px" }}></img>}</Avatar>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {shoppingItems.length === 0 ? <StyledNothingText>{"Nothing here :("}</StyledNothingText> :
                    shoppingItems.map(({ id, quantity }) => (
                        <MenuItem key={id} onClick={() => navigateToProductPage(id)}>
                            <StyledQuantityDiv >{quantity}x</StyledQuantityDiv>
                            {products[id].title}
                            <StyledImage src={products[id].imageUri} alt="Product.png"></StyledImage>
                            <StyledButton onClick={(event) => removeItem(event, id)}>X</StyledButton>
                        </MenuItem>
                    ))}

                {shoppingItems.length > 0 ?
                    <MenuItem onClick={removeAllItems}><StyledClearText>Clear all</StyledClearText></MenuItem> : null}
                {shoppingItems.length > 0 ?
                    <MenuItem onClick={navigateToShopPage}><StyledShopText>Buy Items</StyledShopText></MenuItem> : null}
            </Menu>
        </div >
    );
}
export default ShoppingCart;