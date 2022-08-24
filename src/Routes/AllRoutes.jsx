import {Routes, Route} from "react-router-dom";
import CartPage from "./CartPage";
import HomePage from "./HomePage";
import Login from "./LoginPage"
import ProductPage from "./ProductPage";
import SignUp from "./SignUp";

function  AllRoutes(){
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/productpage" element={<ProductPage/>}/>
            <Route path="/cartpage" element={<CartPage/>}/>
        </Routes>
        </>
    )
}
export default AllRoutes