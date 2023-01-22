import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="side-bar">
      <ul className="list-nav">
        <li className="list-nav-point">
          <a href="#">Profile</a>
        </li>
        <li className="list-nav-point">
          <a href="#">Messages</a>
        </li>
        <li className="list-nav-point">
          <a href="#">News</a>
        </li>
        <li className="list-nav-point">
          <a href="#">Music</a>
        </li>
        <hr />
        <li className="list-nav-point">
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
