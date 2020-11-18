import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductList.scss";
import ProductCard from "../../components/productCard/ProductCard";
import { allProductsRequest } from "../../store/Product/actions";
import { addItemToCart } from "../../store/Cart/actions";

const ProductList = () => {
  const { data, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItemToCart(item));
  };
  const getProducts = () => {
    dispatch(allProductsRequest());
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="product-list-container">
      {!error && data && (
        <div className="mt-2 d-flex flex-wrap">
          {data?.map((item, id) => (
            <ProductCard addToCart={() => addToCart(item)} key={id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductList;
