import stl from "./Sidebar.module.css";

function Sidebar() {
  return (
    <nav className={stl.sidebar}>
      <ul className={stl.listnav}>
        <li className={stl.listnavpoint}>
          <a href="#">Profile</a>
        </li>
        <li className={stl.listnavpoint}>
          <a href="#">Messages</a>
        </li>
        <li className={stl.listnavpoint}>
          <a href="#">News</a>
        </li>
        <li className={stl.listnavpoint}>
          <a href="#">Music</a>
        </li>
        <hr />
        <li className={stl.listnavpoint}>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
