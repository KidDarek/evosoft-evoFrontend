import React, { useState, useContext, useEffect } from "react";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ProductContext,
  ProductContextProvider,
} from "../../context-providers/ProductContext";

const StyledCardContainer = styled("div")({
  display: "flex",
  width: "700px",
  height: "120px",
  overflow: "hidden",
  padding: "10px 25px 10px 0px",
  background: "#00cc99",
  borderRadius: "15px",
});

const StyledH3 = styled("h3")({
  padding: "0",
  marginLeft: "20px",
  marginTop: "0px",
  marginBottom: "-20px",
  color: "white",
  fontSize: "20px",
  textDecoration: "underline",
});

const StyledP = styled("p")({
  padding: "0",
  marginLeft: "30px",
  marginTop: "-10px",
  color: "white",
  fontSize: "15px",
});

const StyledTable = styled("table")({
  height: "120px",
  background: "#00cc99",
  color: "white",
  cursor: "pointer",
  borderRadius: "15px",
});

const MiniCard = (props) => {
  const navigate = useNavigate();

  const navigateToProductPage = () => {
    navigate(`/Product/${props.id}`);
  };

  const { getProductById } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const product = await getProductById(props.id);
      setProduct(product);
    }

    fetchProduct();
  }, [getProductById, props.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <ProductContextProvider>
      <StyledCardContainer>
        <StyledTable onClick={navigateToProductPage}>
          <tbody>
            <tr>
              <td rowSpan="3">
                <img
                  src={product.imageUri}
                  alt=""
                  overflow="hidden"
                  height="100px"
                  width="150px"
                  align="middle"
                ></img>
              </td>
            </tr>
            <tr>
              <td>
                <StyledH3>{product.title}</StyledH3>
              </td>
            </tr>
            <tr>
              <td>
                <StyledP>{product.body}</StyledP>
              </td>
            </tr>
          </tbody>
        </StyledTable>
      </StyledCardContainer>
    </ProductContextProvider>
  );
};
export default MiniCard;
