import React from "react";
import OrderForm from "./OrderForm/OrderForm";
import { OrderProducts } from "./OrderProducts/OrderProducts";
const Order = () => {
  submitOrder = () => {};
  return (
    <div>
      <h1 className="text-center">Order Review</h1>
      <div className="order-now">
        <h3>Submit Order</h3>
        <OrderForm  onSubmit={submitOrder}/>
      </div>
      <div className="order-products">
        <h3>Selected Products</h3>
        <OrderProducts />
      </div>
    </div>
  );
};

export default Order;
