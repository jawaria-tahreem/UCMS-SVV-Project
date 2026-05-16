
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>UCMS</h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add-course">Add Course</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
