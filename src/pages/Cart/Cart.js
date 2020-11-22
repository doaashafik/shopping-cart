import React, { Fragment } from "react";
import { CartProducts } from "../../components/cartProducts/CartProducts";
import { useSelector } from "react-redux";
import './Cart.scss'
const Cart = () => {
    const { items } = useSelector((state) => state.cart);
  return (
    <Fragment>
        <h1 className="mt-2">
            Shopping Cart
        </h1>
      {items.length > 0 ? (
        <>
          <CartProducts items={items}/>
          <a href={"/shopping-cart/#/order"} className="product-checkout">
            Review Order
          </a>
        </>
      ) : (
        <strong>Start Shopping Now!</strong>
      )}
    </Fragment>
  );
};
export default Cart;
