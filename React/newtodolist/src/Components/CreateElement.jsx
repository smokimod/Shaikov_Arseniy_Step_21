import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const CreateElement = (props) => {
  return (
    <div className="todo">
      <input type="checkbox" />
      <li className="todo_item">{props.item}</li>
      <FontAwesomeIcon icon={"edit"} />
      <FontAwesomeIcon icon={"trash"} />
    </div>
  );
};
// id={(Math.random() * 1000).toString}
