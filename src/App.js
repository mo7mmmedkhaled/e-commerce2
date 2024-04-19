import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
import mensWear from "./Components/assets/mens-wear.jpg";
import kidsWear from "./Components/assets/kids-wear.jpg";
import womensWear from "./Components/assets/womens-wear1.jpg";
import Favorite from './Pages/Favorite';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/mens"
            element={<ShopCategory banner={mensWear} category="mens-wear" />}
          ></Route>
          <Route
            path="/womens"
            element={
              <ShopCategory banner={womensWear} category="womens-wear" />
            }
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory banner={kidsWear} category="kids-wear" />}
          ></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
          <Route path="/login" element={<LoginSignUp />}></Route>
          <Route path="/loginin" element={<LoginSignUp />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
