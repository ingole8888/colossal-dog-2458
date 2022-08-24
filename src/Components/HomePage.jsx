import Navbar from "./Navbar";
import Footer from "./Footer"
import "./HomePage.css"

function HomePage(){
    return (
        <>
        <Navbar/>
        <div className="addposter">
            <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw10c21dc4/images/Fall2022/boc-launch-prospects_hm_0.gif?yocs=s_"
            alt=""
            />
        </div>
        <Footer/>
        </>
    )
}
export default HomePage;