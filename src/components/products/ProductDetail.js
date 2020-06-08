import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";

function ProductDetail(props) {
  const productId = props.productId;
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    productTypeId: "",
    productType: "",
    locations: [],
  });

  useEffect(() => {
    APIManager.getResourceByIdWithExpand(
      "products",
      productId,
      "productType"
    ).then((result) => {
      APIManager.getProductLocations(productId).then((res) => {
        result.locations = res.map((loc) => loc.location);
        setProduct(result);
      });
    });
  }, [productId]);

  const deleteproduct = () => {
    APIManager.deleteResource("products", product.id).then((res) =>
      props.history.push("/products")
    );
  };

  return (
    <div className="card vert">
      <div>
        <img src={`/images/products/${product.img}`} alt={product.name} />
      </div>
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
      <h3>Type: {product.productType.name}</h3>
      {product.locations.length > 0 && (
        <>
          <h3>Sold at:</h3>
          {product.locations.map((location) => {
            return <p key={location.id}>{location.name}</p>;
          })}
        </>
      )}
      {/* <h3>Location: {product.location.name}</h3> */}
      {props.userIsSupervisor && (
        <button onClick={deleteproduct}>delete product</button>
      )}
      <button
        onClick={() => props.history.push(`/products/edit/${product.id}`)}
      >
        edit
      </button>
    </div>
  );
}

export default ProductDetail;
