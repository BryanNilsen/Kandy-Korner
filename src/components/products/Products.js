import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import ProductCard from "./ProductCard";

function Products(props) {
  const [products, setProducts] = useState([{ id: 0, locations: [] }]);

  const mapProducts = (productsArray) => {
    productsArray.map((result) =>
      APIManager.getProductLocations(result.id).then((locs) => {
        result.locations = locs.map((loc) => loc.location);
        return result;
      })
    );
  };

  useEffect(() => {
    // get all products
    APIManager.getResource("products").then((results) => {
      //
      // map over products to get locations - wrap with promise.all
      Promise.all(
        results.map((result) =>
          APIManager.getProductLocations(result.id).then((locs) => {
            //
            // map over locations to get states - wrap with promise.all
            // Promise.all(
            //   locs.map((loc) =>
            //     APIManager.getResourceById("states", loc.location.stateId).then(
            //       (state) => {
            //         loc.location.state = state.name;
            //         return loc;
            //       }
            //     )
            //   )
            // )

            result.locations = locs.map((loc) => loc.location);
            return result;
          })
        )
      ).then((prodsWithLocations) => setProducts(prodsWithLocations));
    });
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
