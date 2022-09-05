import React from "react";

const Logo = () => {
  const img = document.querySelector(".image");
  return (
    <div className="logo">
      <img src="./logo192.png" alt="" />

      <h3>React Word</h3>
    </div>
  );
};

export default Logo;
