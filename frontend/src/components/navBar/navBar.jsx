import { Link, useNavigate } from "react-router-dom";
import "./navBar.css";
function NavBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/users/add");
  };
  return (
    <div className="navBar">
      <div className="navContainer">
      <Link className="logo" to="/">
          <img className="logoImage" src="/Users/merafasbe/Desktop/September-19/github/book-finder-app/frontend/public/logo.png" alt="Logo" />
        </Link>
        <div className="navItems">
          <button onClick={handleClick} className="navButton">
            Register
          </button>
          <button className="navButton">sign in </button>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
