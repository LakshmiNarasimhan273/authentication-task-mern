import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-slate-700  w-full flex items-center justify-around p-3">
      <div>
        <Link to="/">
          <h1 className="font-bold text-2xl text-white">MERN Auth</h1>
        </Link>
      </div>
      <div className="text-white font-semibold flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/login">Sign in</Link>
        <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
}

export default Navbar;
