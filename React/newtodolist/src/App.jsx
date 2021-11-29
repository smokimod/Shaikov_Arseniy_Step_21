import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEdit, faTrash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { List } from "./Components/List";

export const App = () => {
  library.add(fab, faEdit, faTrash, faTimes);
  return (
    <div>
      <List />
    </div>
  );
};
