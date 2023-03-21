
import { Button, createTheme, styled } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import React from 'react'
import { products } from '../../db'
import Card from '../main-page/best-deals/Card'

const StyledContainer = styled("div")({
    paddingTop: "25px",
    marginLeft: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
});

const StyledDiv = styled("div")({
    marginTop: "25px",
    marginLeft: "25px",
    fontSize: "50px",
    color: "#ffffff",
});

const StyledPageDiv = styled("div")({
    backgroundColor: "#00EFB3",
})

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

let shoppingItems;
const RefreshShoppingItems = () => {
    shoppingItems = JSON.parse(localStorage.getItem("shoppingItems")) ?? [];
}

let total;
const CalculateTotal = () => {
    total = 0;
    for (let i = 0; i < shoppingItems.length; i++) {
        total += shoppingItems[i].quantity * shoppingItems[i].price;
    }
}

const ShopPage = () => {
    RefreshShoppingItems();
    CalculateTotal();
    return (
        <StyledPageDiv>
            <ThemeProvider theme={BasicTheme}>
                {shoppingItems.length !== 0 ? shoppingItems.map(({ id, quantity }) =>
                    <StyledContainer key={id}>
                        <Card id={id} />
                        <StyledDiv>x{quantity}</StyledDiv>
                        <StyledDiv>= ${quantity * products[id].price}</StyledDiv>
                    </StyledContainer>
                ) : null}
                {shoppingItems.length !== 0 ?
                    <StyledDiv>Your total is: ${total} <Button variant='contained' color='green' >Continue</Button></StyledDiv>
                    : null}
            </ThemeProvider>
        </StyledPageDiv>
    )
}

export default ShopPage