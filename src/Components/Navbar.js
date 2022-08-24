import { Link } from "react-router-dom";
import "./Navbar.css"
import { FaShoppingBag } from 'react-icons/fa';
import { FcBusinesswoman } from 'react-icons/fc';

function Navbar() {
  return (
    <div className="navitem">
      <div className="navitem1">
        <div></div>
        <div>
        <Link className="navitem11" to="/"><h1 >Bath & Body Works</h1> </Link>
        </div>
        <div className="navitem2">
          <div><input className="input" placeholder="search product"/></div>
          <div className="navitem21">
            <div><Link to="/signup"><FcBusinesswoman/></Link></div>
          {/* <Link className="navitem11" to="/login">Login</Link> */}
          <div><Link to="/cartpage"><FaShoppingBag/></Link></div>
          </div>
        </div>
      </div>
      <div className="navitem3">
        <Link className="navitem11" to="/productpage">TOP OFFERS</Link>
        <Link className="navitem11" to="/productpage">BODY CARE</Link>
        <Link className="navitem11" to="/productpage">CANDLES</Link>
        <Link className="navitem11" to="/productpage">HOME FRAGNANCE</Link>
        <Link className="navitem11" to="/productpage">HAND SOAPS</Link>
        <Link className="navitem11" to="/productpage">MEN'S</Link>
        <Link className="navitem11" to="/productpage">GIFTS</Link>
        <Link className="navitem11" to="/productpage">FALL SHOP</Link>
      </div>
    </div>
  );
}
export default Navbar;