import React from "react";
const Info = (props) => {
  return (
    <div className="filmBlock">
      <h1>Personal Information</h1>
      <div>{props.name}</div>
      <div>{props.phone}</div>
      <div>{props.email}</div>
      <div>{props.city}</div>
      <span>
        <img src={props.img} alt="shrek 2"></img>
      </span>
    </div>
  );
};

export default Info;
