import "./navBar.css";
function NavBar() {
  return (
    <div className="navBar">
      <div className="navContainer">
        <span className="logo"> bookFinder </span>

        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">sign in </button>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
