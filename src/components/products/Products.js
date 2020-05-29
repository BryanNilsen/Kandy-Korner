import React, { useState } from "react";

function Products() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <h1>Products</h1>
      <p>map over products here</p>
    </>
  );
}

export default Products;
