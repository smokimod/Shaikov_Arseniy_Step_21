import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEdit,
  faTimes,
  faTrash,
  faPluSquare,
} from "@fortawesome/free-solid-svg-icons";
import { List } from "./Components/List";

export const App = () => {
  library.add(fab, faEdit, faTrash, faTimes, faPluSquare);
  return <List />;
};
