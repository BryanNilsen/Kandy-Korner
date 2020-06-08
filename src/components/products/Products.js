import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import ProductCard from "./ProductCard";

function Products(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    APIManager.getResource("products").then((result) => setProducts(result));
  }, []);

  return (
    <>
      <header>
        <h1>Products</h1>
        <button onClick={() => props.history.push("/products/add")}>
          Add Product
        </button>
      </header>
      <div className="card_container horz">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} {...props} />
        ))}
      </div>
    </>
  );
}

export default Products;
