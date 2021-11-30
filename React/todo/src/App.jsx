import React from "react";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEdit,
  faTrash,
  faTimes,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { List } from "./Components/List";

export const App = () => {
  library.add(fab, faEdit, faTrash, faTimes, faPlusSquare);
  return (
    <div className="main">
      <List />
    </div>
  );
};
