import React from "react";

function Film(props) {
  return (
    <div className="filmBlock">
      <h1>Любимый фильм</h1>
      <div>{props.name}</div>
      <div>{props.year}</div>
      <div>{props.reg}</div>
      <div>{props.company}</div>
      <span>
        <img src={props.img} alt="shrek 2"></img>
      </span>
    </div>
  );
}

export default Film;
