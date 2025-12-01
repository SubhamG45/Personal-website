import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";

function Navbar() {
  return (
    <>
   
        <nav className="nav-brand">
        <div className="navbar">
          <ul className="nav-section">
            <li>
            <Link to="/" className="red">Home</Link>
            </li>
            <li>
              <Link to="/about" className="red">About</Link>
            </li>
            <li>
              <Link to = "/blog" className="red"> Blog</Link>
            </li>
        </ul>

        </div>
        
        
      </nav>
      </>
  );
}
export default Navbar;


