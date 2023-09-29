import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-300">
      <div className="container mx-auto">
        <div className="navbar ">
          <div className="flex-1">
            <Link to="/">
              <p className="btn btn-ghost normal-case text-xl">
                User Authentication
              </p>
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
