import React from "react";
import { useNavigate } from "react-router-dom";

const Header1 = (props) => {
  const navigate = useNavigate();

  const goToPage2 = () => {
    navigate("/second");
  };

  return (
    <>
      <button onClick={() => goToPage2()}>click</button>
      <div>Header1</div>
    </>
  );
};

export default Header1;
