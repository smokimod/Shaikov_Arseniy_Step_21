import React from "react";
import { Ach } from "./Achives";

export const InfoField = (props) => {
  return (
    <div className="Info">
      <div className="header">
        <h3>{props.item.name}</h3>
      </div>
      <div className="second_info">
        <div>
          <div>Где основан: {props.item.city}</div>
          <div>Год основания:{props.item.year}</div>
          <Ach item={props.item} />
        </div>

        <div className="members_style">
          <div>Состав: {`  ${props.item.members}  `}</div>
        </div>
        <div>
          <img src={props.item.herb} className="img_size" alt="shreck" />
        </div>
      </div>
    </div>
  );
};
