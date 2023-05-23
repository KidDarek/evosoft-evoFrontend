import styled from "@emotion/styled";
import React, { Fragment, useContext } from "react";
import {
    ProductContext,
} from "../../../context-providers/ProductContext";

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

    const { products } = useContext(ProductContext);

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