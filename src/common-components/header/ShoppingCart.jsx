import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import ShoppingCartLogo from './ShoppingCart.png';
import { useNavigate } from 'react-router-dom';
import { shoppingItems, products } from '../../db';

const ShoppingCart = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

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

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar sx={{ width: 32, height: 32, bgcolor: "#ff0055" }}>{<img src={ShoppingCartLogo} alt='ShoppingCart.png' style={{ width: "24px", height: "24px" }}></img>}</Avatar>
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
                {shoppingItems.length === 0 ? <div style={{ margin: "2px" }}>Nothing</div> :
                    shoppingItems.map((id) => (
                        <MenuItem key={id} onClick={() => navigateToProductPage(id)}>{products[id].title}{<img src={products[id].imageUri} alt="Product.png" style={{ height: "25px" }}></img>}</MenuItem>
                    ))}
            </Menu>
        </div >
    );
}
export default ShoppingCart;