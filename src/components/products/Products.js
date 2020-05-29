import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    APIManager.getResource("products").then((result) => setProducts(result));
  }, []);

  return (
    <>
      <h1>Products</h1>
      <p>map over products here</p>
    </>
  );
}

export default Products;
