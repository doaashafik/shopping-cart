import React from "react";
import {  useSelector } from "react-redux";
import "./ProductList.scss";
import ProductCard from "../../components/productCard/ProductCard";

const ProductList = () => {
  const { data, error } = useSelector((state) => state.products);

  return (
    <div className="product-list-container">
      <h1 className="text-center">Products</h1>
      {!error && data && (
        <div className="mt-2">
          {data.items?.map((item, id) => (
            <ProductCard key={id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductList;
