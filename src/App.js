import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a href="/" className="brand">
              Amazona
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
