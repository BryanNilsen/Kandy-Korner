import React from "react";

function ProductCard(props) {
  const product = props.product;
  return (
    <div className="card vert">
      <div className="img_container">
        <img src={`/images/products/${product.img}`} alt={product.name} />
      </div>
      <h2>{product.name}</h2>
      <h2>${product.price} per lb.</h2>
      <button onClick={() => props.history.push(`/products/${product.id}`)}>
        details
      </button>
    </div>
  );
}

export default ProductCard;
