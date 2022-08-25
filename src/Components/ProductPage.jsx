import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductPage.css"

function ProductPage(){
    const [data, setData]=useState([]);

    useEffect(()=>{
        axios("https://fake-restful-api1.herokuapp.com/Allproducts")
        .then((res)=> setData(res.data))
    });
    console.log(data)
    return (
        <>
        <Navbar/>
        <div className="productdata">
        {data.map((items) => {
           return(
            <div className="subitems">
            <img src={items.image} alt=""/>
            <h4>{items.name}</h4>
            <h2>{items.price}</h2>
            <p>{items.details}</p>
            <button>Add to Cart</button>
            </div>
            
           )
        })}
        
        </div>
        <Footer/>
        </>
    )
}
export default ProductPage