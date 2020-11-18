import React from "react";
import OrderForm from "./OrderForm/OrderForm";
import { OrderProducts } from "./OrderProducts/OrderProducts";
import { Row, Col } from "antd";
const Order = () => {
const submitOrder = () => {};
  return (
    <Row>
      <Col className="order-now" span={12}>
        <OrderForm  onSubmit={submitOrder}/>
      </Col>
      <Col span={12} className="order-products">
        <h3 className=" mt-2 text-center">Products</h3>
        <OrderProducts />
      </Col>
    </Row>
  );
};

export default Order;
