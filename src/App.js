// import "./styles/app.css";
import React from "react";
import { Home, Cart, Checkout } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css";
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/checkout" exact element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
