import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Product from "./pages/Product";
import "./header.css";
import "./products.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/"> R&S </Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<Product />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
