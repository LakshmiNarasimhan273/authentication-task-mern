import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
