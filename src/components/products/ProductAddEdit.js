import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";

const ProductAddEdit = (props) => {
  const status = props.status;
  const productId = props.productId;

  const [product, setProduct] = useState({
    id: 0,
    name: "",
    price: "",
    productTypeId: 0,
    img: "0.jpg",
  });

  const [productTypes, setProductTypes] = useState([]);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...product };
    stateToChange[evt.target.id] = evt.target.value;
    setProduct(stateToChange);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (status === "add") {
      const newProduct = {
        name: product.name,
        price: product.price,
        productTypeId: product.productTypeId,
      };
      APIManager.postResource("products", newProduct).then((res) => {
        props.history.push("/products");
      });
    }
    if (status === "edit") {
      const editedProduct = { ...product };
      APIManager.updateResource("products", editedProduct).then((res) => {
        props.history.push(`/products/${editedProduct.id}`);
      });
    }
  };

  useEffect(() => {
    if (status === "edit") {
      APIManager.getResourceById("products", productId).then((res) => {
        setProduct(res);
      });
    }
    APIManager.getResource("productTypes").then((res) => setProductTypes(res));
  }, [productId, status]);

  return (
    <>
      <div className="center">
        <h1>{product.id === 0 ? "Add" : "Edit"} Product</h1>
        <form>
          <fieldset>
            <label htmlFor="name">name</label>
            <input
              name="name"
              type="text"
              id="name"
              value={product.name}
              onChange={handleFieldChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="price">price</label>
            <input
              name="price"
              type="text"
              id="price"
              value={product.price}
              onChange={handleFieldChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="productType">Product Type</label>
            <select
              id="productTypeId"
              name="productTypeId"
              value={product.productTypeId}
              onChange={handleFieldChange}
            >
              {productTypes.map((productType) => (
                <option key={productType.id} value={productType.id}>
                  {productType.name}
                </option>
              ))}
              {/* iterate product types for options */}
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="locationId">Location(s) Sold</label>
            {/* multiselect?? */}
          </fieldset>
        </form>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default ProductAddEdit;
