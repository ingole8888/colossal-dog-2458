import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProductPage from "./Components/ProductPage";
import CartPage from "./Components/CartPage"
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <>
    <div>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/productpage" element={<ProductPage/>} />
              <Route path="/cartpage" element={<CartPage/>} />
            </Routes>
          </UserAuthContextProvider>
    </div>
    </>
  );
}

export default App;
