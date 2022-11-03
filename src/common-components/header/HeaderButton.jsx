import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderStyle.css";

const HeaderButton = (props) => {
  const navigate = useNavigate();
  const path = props.path;
  const goToPageX = () => {
    navigate(path);
  };
  return (
    <button
      style={{ backgroundColor: "transparent", border: "0" }}
      onClick={goToPageX}
    >
      {props.text}
      {props.image ? (
        <img src={props.image} width="50" height="50" alt="logo"></img>
      ) : null}
    </button>
  );
};

export default HeaderButton;
