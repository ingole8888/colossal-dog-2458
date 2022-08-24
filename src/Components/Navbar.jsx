import { Link } from "react-router-dom";
import "./Navbar.css"
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { FcBusinesswoman } from 'react-icons/fc';

function Navbar() {
  return (
    <div className="navitem">
      <div className="navitem1">
        <div></div>
        <div>
        <Link className="navitem11" to="/"><h1 >Bath & Body Works</h1> </Link>
        </div>
        <div>
          <input placeholder="search product"/><button><FaSearch/></button>
          <Link to="/signup"><FcBusinesswoman/></Link>
          <Link className="navitem11" to="/login">Login</Link>
          <Link to="/cartpage"><FaShoppingBag/></Link>
        </div>
      </div>
      <div>
      <Link className="navitem11" to="/productpage">Product Page</Link>
      </div>
    </div>
  );
}

export default Navbar;
