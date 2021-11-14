import React from "react";

const Time = (props) => {
  return (
    <div className="filmBlock">
      <h1>Текующее время</h1>
      <div>{props.time.toLocaleTimeString()}</div>
    </div>
  );
};

export default Time;
