import React from "react";
import "./Footer.css"  
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

export default function Footer(){
    return(
        <>
         <div>
            <div className="foot1">
              <div>
                <p>Get email offers & the latest news</p>
                <p> from Bath & Body Works!</p>
                <p>Enter Email</p>
                <input placeholder="enter your email"/>
                <p>Confirm Email</p>
                <input placeholder="rewrite email"/><button>Submit</button>
              </div>
              <div>
                <h5>COSTOMER CARE</h5>
                <a className="root4p" href="https://customercare.bathandbodyworks.com/"><p>Help & FAQs</p></a>
                <a className="root4p" href="https://customercare.bathandbodyworks.com/"><p>Shipping</p></a>
                <a className="root4p" href="https://customercare.bathandbodyworks.com/"><p>Returns & Exchanges</p></a>
                <a className="root4p" href="https://customercare.bathandbodyworks.com/"><p>Order Tracking</p></a>
                <a className="root4p" href="https://customercare.bathandbodyworks.com/"><p>Corporate Sales & Gifts</p></a>
                <a className="root4p" href="https://customercare.bathandbodyworks.com/"><p>Contact Us</p></a>
              </div>
              <div>
                <h5>MY ACCOUNT</h5>
                <a className="root4p" href="https://www.bathandbodyworks.com/my-account/order-history"><p>Sign In or Sign Up</p></a>
                <a className="root4p" href="https://www.bathandbodyworks.com/my-account/order-history"><p>Order Tracking</p></a>
                <a className="root4p" href="https://www.bathandbodyworks.com/my-account/order-history"><p>My Auto Refresh</p></a>
                <a className="root4p" href="https://www.bathandbodyworks.com/my-account/order-history"><p>My Love-It List</p></a>
              </div>
              <div>
                <h5>DISCOVER</h5>
                <a className="root4p" href="https://www.bbwinc.com/our-company/about-us"><p>About Us</p></a>
                <a className="root4p" href="https://www.bbwinc.com/our-company/about-us"><p>Careers</p></a>
                <a className="root4p" href="https://www.bbwinc.com/our-company/about-us"><p>Gift Cards</p></a>
                <a className="root4p" href="https://www.bbwinc.com/our-company/about-us"><p>Shop by Fragrance</p></a>
                <a className="root4p" href="https://www.bbwinc.com/our-company/about-us"><p>Product Ingredients</p></a>
                <a className="root4p" href="https://www.bbwinc.com/our-company/about-us"><p>Get Inspired</p></a>
                <a className="root4p" href="https://www.bbwinc.com/our-company/about-us"><p>Diversity, Equity & Inclusion</p></a>
              </div>
              <div>
                <h5>Find Us</h5>
                <a className="root4p" href="https://www.bathandbodyworks.com/store-locator"><p>Store Locator</p></a>
                <a className="root4p" href="https://www.bathandbodyworks.com/store-locator"><p>Global Locations</p></a>
              </div>
            </div>
            <div className="foot2">
                <div>
                    <h5>Get Connected</h5>
                   <div className="foot3">
                    <a href="https://www.facebook.com/bathandbodyworks"><FaFacebook/></a>
                    <a href="https://www.instagram.com/bathandbodyworks/"><FaInstagram/></a>
                    <a href="https://www.pinterest.com/bathbodyworks/"><FaPinterest/></a>
                    <a href="https://www.youtube.com/user/bathandbodyworks/"> <FaYoutube/></a>
                   </div>
                </div>
                <div>
                    <img
                    src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_"
                    alt=""
                    />
                </div>
            </div>
            <div>
                <div className="foot4">
                    <a className="root4p" href="https://www.bathandbodyworks.com/customer-care/terms-of-use.html"><p>Terms Of Use</p></a>
                    <a className="root4p" href="https://www.bathandbodyworks.com/customer-care/privacy-and-security.html"><p>Privacy Policy</p></a>
                    <a className="root4p" href="https://bugcrowd.com/lbrands-bbw-vdp?preview=b9230133a00cd5ba1e9eeb18798956d2"><p>Security Bug Report</p></a>
                    <a className="root4p" href="https://www.bathandbodyworks.com/customer-care/california-privacy-rights.html"><p>California Privacy Rights</p></a>
                    <a className="root4p" href="https://www.bathandbodyworks.com/customer-care/do-not-sell.html"><p>Do Not Sell My Personal Information</p></a>
                    <a className="root4p" href="https://www.bbwinc.com/corporate-responsibility/supply-chain/transparency-in-supply-chains"><p>Transparency in Supply Chains</p></a>
                    <a className="root4p" href="https://www.bathandbodyworks.com/customer-care/privacy-and-security.html#2"><p>Add Preference</p></a>
                </div>
                <div>
                    <p className="p">© 2022 Bath & Body Works Direct, Inc. All Rights Reserved.</p>
                </div>
            </div>
         </div>
        </>
    )
}