import React from "react";

function ProductCard(props) {
  const product = props.product;
  return (
    <div className="card vert">
      <div className="img_container">
        <img src={`/images/products/${product.id}.jpg`} alt={product.name} />
      </div>
      <h2>{product.name}</h2>
      <button>details</button>
    </div>
  );
}

export default ProductCard;
