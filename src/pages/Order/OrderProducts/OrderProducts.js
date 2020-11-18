import React, { Component, useEffect } from "react";
import './OrderProducts.scss'
export const OrderProduct = ({ product }) => {
  const { count, title, price } = product;
  return (
    <div className="order-product">
      <p>name: {title}</p>
      <p>Quantity: {count}</p>
      <p>price Per Item: {price}</p>
    </div>
  );
};
