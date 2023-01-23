import { NavLink } from "react-router-dom";
import stl from "./Sidebar.module.css";

function Sidebar() {
  return (
    <nav className={stl.sidebar}>
      <ul className={stl.listnav}>
        <li className={stl.listnavpoint}>
          <NavLink to="/ProfilePage">Profile</NavLink>
        </li>
        <li className={stl.listnavpoint}>
          <NavLink to="/Dialogs">Messages</NavLink>
        </li>
        <li className={stl.listnavpoint}>
          <NavLink to="/News">News</NavLink>
        </li>
        <li className={stl.listnavpoint}>
          <NavLink to="/Music">Music</NavLink>
        </li>
        <hr />
        <li className={stl.listnavpoint}>
          <NavLink to="/Sett">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
