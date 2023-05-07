import styled from "@emotion/styled";
import { products } from "../../DataBaseLoader";
import React, { Fragment } from "react";

const StyledProdCard = styled("div")({
    height: "auto",
    width: "15%",
    margin: "10px",
    background: "#00cc99",
    borderRadius: "15px",
    color: "white",
    padding: "10px",
    textAlign: "center",
})

const StyledImg = styled("img")({
    width: "200px",
})



function SimilarProdCard(props) {
    return (
        products.map((product, i) => (
            <Fragment key={i}>
                {product.category === products[props.ID].category && product.id !== products[props.ID].id ? (
                    <StyledProdCard>
                        <StyledImg src={product.imageUri} alt="Picture" />
                    </StyledProdCard>
                ) : null}
            </Fragment>
        ))
    )
}

export default SimilarProdCard