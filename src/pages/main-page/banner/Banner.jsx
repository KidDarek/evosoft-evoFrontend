import React from "react";

const Banner = () => {
  return (
    <>
      <div style={{ border: "0", height: "400px", width: "100%" }}>
        <button style={{ height: "400px", width: "60px" }}>left</button>
        <button style={{ height: "400px", width: "60px", float: "right" }}>
          right
        </button>
      </div>
    </>
  );
};

export default Banner;
