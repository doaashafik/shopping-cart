import React, { useEffect } from "react";

import ProductCard from "../../components/productCard/ProductCard";
import { allProductsRequest } from "../../store/Product/actions";
import { addItemToCart } from "../../store/Cart/actions";
import {  useSelector, useDispatch } from "react-redux";
import { open } from "../../components/notification/Notification";

const ProductList  = () => {
  const { data } = useSelector(state => state.products)
  const dispatch = useDispatch()
 const handler = (item) => {
      open({
        slug: "Add Item To Cart",
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
      <div className="product-list-container">
        {data && (
          <div className="mt-2 d-flex flex-wrap justify-content-center">
            {data.map((item, id) => (
              <ProductCard
              key={`${id} id`}
              addToCart={() => handler(item)}
              product={item}
            />
            ))}
          </div>
        )}
      </div>
    );
  }
export default (ProductList);
