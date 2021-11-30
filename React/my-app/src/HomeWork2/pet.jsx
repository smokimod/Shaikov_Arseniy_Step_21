import React from "react";

const Pet = (props) => {
  return (
    <div className="filmBlock">
      <h1>Любимый Питомец</h1>
      <div>{props.name}</div>
      <div> <div>Он русский{props.desc}</div></div>
      <img src={props.img} alt="shrek 2"></img>

    </div>
  );
};

export default Pet;
