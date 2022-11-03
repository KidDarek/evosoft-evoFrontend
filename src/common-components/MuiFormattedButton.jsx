import { Button, styled } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)({
  backgroundColor: "#000000",
  color: "#00ff00",
});

const MuiFormattedButton = (props) => {
  return (
    <>
      <StyledButton onClick={props.onButtonClick}>
        {props.buttonText}
      </StyledButton>
    </>
  );
};

export default MuiFormattedButton;
