import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputAdd } from "../OtherComponents/InputAdd";
import { useState } from "react";
import { CreateElement } from "./CreateElement";
import { useEffect } from "react";

export const List =  () => {
  const [item, setItem] = useState([]);
  const arrayOfTodo = (array) => {
    setItem( (prev)  =>  [...prev, ...array]);
  };

  return (
    <div>
      <header className="title">
        <h1>TODOLIST </h1>
      </header>
      <InputAdd arrayOfElements={arrayOfTodo} />
      <div className="remove">
        <button className="remove_btn">
          Remove Checked
          <span className="cross_style">
            <FontAwesomeIcon icon="times" />
          </span>
        </button>
      </div>
      <div className="Main_progress">
        <div className="text_progress">
          Coplited Tasks <span className="spanOne"></span> of{" "}
          <span className="spanTwo"></span>
        </div>
        <div id="myProgress">
          <div id="myBar"> </div>
        </div>
      </div>

      <div className="todo_container">
        <ul className="todo_list">
          {item.map((point, i) => (
            <CreateElement key={Math.random(i)} item={point.item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
