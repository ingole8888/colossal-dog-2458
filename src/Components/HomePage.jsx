import Navbar from "./Navbar";
import Footer from "./Footer"
import { Link } from "react-router-dom";
import "./HomePage.css"
import HomeBody from "./HomeBody";
function HomePage(){
    return (
        <>
        <Navbar/>
        <Link to="/checkout">Check</Link>
        <div className="addposter">
            <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw10c21dc4/images/Fall2022/boc-launch-prospects_hm_0.gif?yocs=s_"
            alt=""
            />
        </div>
        <HomeBody/>
        <Footer/>
        </>
    )
}
export default HomePage;