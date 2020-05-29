import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    APIManager.getResource("products").then((result) => setProducts(result));
  }, []);

  return (
    <>
      <header>
        <h1>Products</h1>
      </header>
      <div className="card_container horz">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Products;
