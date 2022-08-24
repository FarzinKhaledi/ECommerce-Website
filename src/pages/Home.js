import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import data from "../data";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4300/api/products")
      .then((res) => {
        console.log("res", res)
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "459px", height: "500px" }}
              />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>£{product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
