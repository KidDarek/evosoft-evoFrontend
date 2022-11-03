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
    </button>
  );
};

export default HeaderButton;
