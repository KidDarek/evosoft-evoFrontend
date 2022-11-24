import styled from '@emotion/styled'
import React from 'react'
import { products } from '../../db'

const StyledPageDiv = styled("div")({
  display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: '400px',
    padding: "25px",
    backgroundImage: "linear-gradient(to right, #00cc99, #0066ff, #ff0055)",
    
})

const StyledInfoDiv = styled("div")({
  width: "50%",
  alignItems: "start",
  marginLeft: "25px",
  display: "flex",
  justifyContent: "start",
  height: '100%',
})

const StyledInfoDivText = styled("div")({
  width: "50%",
  alignItems: "start",
  display: "flex",
  justifyContent: "start",
  height: '100%',
  border: "10px solid black"
})

const StyledInfoDivText2 = styled("div")({
  width: "100%",
  alignItems: "start",
  marginLeft: "25px",
  display: "flex",
  justifyContent: "start",
  height: '100%',
})

const  desiredProduct = products


const ProductPage = (props) => {
  return (
    <>
    <StyledPageDiv>
    <StyledInfoDiv>
    <div><img src={desiredProduct[0].imageUri} alt="kep" height="450px" frame="true" border="10px" borderRadius="30px"/></div>
    </StyledInfoDiv>
    <StyledInfoDivText>
      <div>
      <h1 style={{color: "white"}}>Product name: {desiredProduct[0].title}</h1>
      <h1 style={{color: "white"}}>Price: {desiredProduct[0].price}</h1>
      <h1 style={{color: "white"}}>Category: {desiredProduct[0].category}</h1>
      </div>
    </StyledInfoDivText>
    </StyledPageDiv>
    <StyledPageDiv>
    <StyledInfoDivText2>
      <div>
      <h1 style={{color: "white"}}>Termék leírása</h1>
      </div>
    </StyledInfoDivText2>
    </StyledPageDiv>
    </>
    
  )
}

export default ProductPage