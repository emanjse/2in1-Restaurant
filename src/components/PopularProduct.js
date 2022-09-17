import React from "react";
import {popularProducts} from "./Data";
import ProductCard from "./ProductCard";
const PopularProduct = () => {
  return (
    <section>
      <div class="container">
        <div class="row">
          <div className=" col-lg-12 pb-5">
            <h2 className="text-center">Most Popular</h2>
          </div>

          {popularProducts.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;