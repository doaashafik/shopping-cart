import React, { useEffect } from "react";

import ProductCard from "../../components/productCard/ProductCard";
import { allProductsRequest } from "../../store/Product/actions";
import { addItemToCart } from "../../store/Cart/actions";
import {  useSelector, useDispatch } from "react-redux";
import { open } from "../../components/notification/Notification";
import { ErrorBoundary } from "../../components/errorBoundries/ErrorBoundries";

const ProductList  = () => {
  const { data } = useSelector(state => state.products)
  const dispatch = useDispatch()
 const handler = (item) => {
      open({
        title: item.title,
        message:
          "Your Item Added Successfully To Shopping Cart",
      });
      dispatch(addItemToCart(item))
  }
    useEffect(() => {
      dispatch(allProductsRequest())
    }, [])
    return (
      <ErrorBoundary className="product-list-container">
        {data && (
          <div className="mt-2 d-flex flex-wrap justify-content-center">
            {data.map((item, id) => (
              <ProductCard
              addToCart={() => handler(item)}
              product={item}
            />
            ))}
          </div>
        )}
      </ErrorBoundary>
    );
  }
export default (ProductList);
