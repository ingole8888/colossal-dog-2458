import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navitem">
     <Link to="/">Home Page</Link>
     <Link to="/productpage">Product Page</Link>
     <Link to="/signup">Sign Up</Link>
     <Link to="/loginpage">Login</Link>
     <Link to="/cartpage">Cart Page</Link>
    </div>
  );
}

export default Navbar;
