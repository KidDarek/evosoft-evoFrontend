import styled from '@emotion/styled'
import React from 'react'

const StyledPageDiv = styled("div")({
  display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: '100%',
    padding: "25px",
    backgroundImage: "linear-gradient(to right, #00cc99, #0066ff, #ff0055)",
    
})

const StyledInfoDiv = styled("div")({
  width: "50%",
  alignItems: "left",
  marginLeft: "25px",
  justifyContent: "center",
  position: "top",
})


const ProductPage = (props) => {
  return (
    <>
    <StyledPageDiv>
      <div><img src="https://i.imgur.com/sJWUwiO.jpeg" alt="kep" height="500px" frame="true" /></div>
      <StyledInfoDiv>
        <div>Név</div>
        <div>Ár</div>
        <div>Szín</div>
        <div>Méret</div>
      </StyledInfoDiv>
    </StyledPageDiv>
    <StyledPageDiv>
      <button>Nem tom ide mi kell</button>
    </StyledPageDiv>
    </>
    
  )
}

export default ProductPage