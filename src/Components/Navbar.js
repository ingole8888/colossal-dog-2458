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
            <div class="dropdown">
            <button class="dropbtn"><FcBusinesswoman/></button>
            <div class="dropdown-content">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            </div>
            </div>
          <div><Link to="/cartpage"><FaShoppingBag/></Link></div>
          </div>
        </div>
      </div>
      <div className="navitem3">
        <div class="dropdown">
            <button class="dropbtn">TOP OFFERS</button>
            <div class="dropdown-content">
            <Link to="/productpage">Daily Offers</Link>
            <Link to="/productpage">Weakly Offers</Link>
            </div>
            </div>
            <div class="dropdown">
            <button class="dropbtn">BODY CARE</button>
            <div class="dropdown-content">
            <Link to="/productpage">All bath showers</Link>
            <Link to="/productpage">Body wash & Shower Gel</Link>
            <Link to="/productpage">Bubble Bath</Link>
            <Link to="/productpage">Body Scrub</Link>
            <Link to="/productpage">Bar Soaps</Link>
            <Link to="/productpage">Bath Accessories</Link>
            </div>
            </div>
            <div class="dropdown">
            <button class="dropbtn">CANDLES</button>
            <div class="dropdown-content">
            <Link to="/productpage">3-Wick cadles</Link>
            <Link to="/productpage">single Wick Cadles</Link>
            <Link to="/productpage">cadles Holders</Link>
            </div>
            </div>
            <div class="dropdown">
            <button class="dropbtn">HOME FRAGNANCE</button>
            <div class="dropdown-content">
            <Link to="/productpage">All Wallflowers</Link>
            <Link to="/productpage">wallflowers Plugs</Link>
            <Link to="/productpage">Room spray</Link>
            <Link to="/productpage">car Fragnance</Link>
            <Link to="/productpage">Spray</Link>
            </div>
            </div>
            <div class="dropdown">
            <button class="dropbtn">HAND SOAPS</button>
            <div class="dropdown-content">
            <Link to="/productpage">All Hand Soaps</Link>
            <Link to="/productpage">Foaming Soaps</Link>
            <Link to="/productpage">Gel Soaps</Link>
            <Link to="/productpage">Soap Holders</Link>
            </div>
            </div>
            <div class="dropdown">
            <button class="dropbtn">MEN'S</button>
            <div class="dropdown-content">
            <Link to="/productpage">All Mens Body Care</Link>
            <Link to="/productpage">Body Wash</Link>
            <Link to="/productpage">Moisturizers</Link>
            <Link to="/productpage">Body Spray</Link>
            <Link to="/productpage">Hans Soaps</Link>
            <Link to="/productpage">Sanitizers</Link>
            </div>
            </div>
            <div class="dropdown">
            <button class="dropbtn">GIFTS</button>
            <div class="dropdown-content">
            <Link to="/productpage">Gifts Sets</Link>
            </div>
            </div>
            <div class="dropdown">
            <button class="dropbtn">FALL SHOP</button>
            <div class="dropdown-content">
            <Link to="/productpage">New Arrivals</Link>
            <Link to="/productpage">Top Fragnance</Link>
            <Link to="/productpage">Fall Collection</Link>
            <Link to="/productpage">Halloween</Link>
            <Link to="/productpage">Best Sellers</Link>
            <Link to="/productpage">Get Inspired</Link>
            </div>
            </div>
      </div>
    </div>
  );
}
export default Navbar;