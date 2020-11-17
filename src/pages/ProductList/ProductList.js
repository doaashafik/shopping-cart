import React, { useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";
import "./ProductList.scss";
import ProductCard from "../../components/productCard/ProductCard";
import { allProductsRequest } from "../../store/Product/actions";

const ProductList = () => {
  const { data, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const getProducts =  () => {
    dispatch(allProductsRequest());
  }
 useEffect(() => {
   getProducts()
 }, [])
  return (
    <div className="product-list-container">
      <h1 className="text-center">Products</h1>
      {!error && data && (
        <div className="mt-2 d-flex flex-wrap">
          {data?.map((item, id) => (
            <ProductCard key={id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductList;
