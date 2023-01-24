import stl from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

function DialogItem(props) {
  return (
    <div className={stl.userDialog}>
      <NavLink
        to={"/dialogs/" + props.id}
        className={(navData) =>
          navData.isActive ? stl.active : stl.userDialogNav
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
}

export default DialogItem;
