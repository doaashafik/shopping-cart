import React, { useEffect, Fragment } from "react";
import OrderForm from "./OrderForm/OrderForm";
import { OrderProduct } from "./OrderProducts/OrderProducts";
import { Row, Col } from "antd";
import { submitUserOrder, getTotal } from "../../store/Cart/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Order = () => {
  const dispatch = useDispatch();
 useEffect(()=> {
   dispatch(getTotal())
 }, [])
  const submitForm = (values) => {
    dispatch(submitUserOrder(values));
  };
  const { items, total } = useSelector((state) => state.cart);

  return (
    <Row>
      {items.length > 0 ? (
        <Fragment>
          <Col className="order-now" span={12}>
            <OrderForm submitForm={submitForm} />
          </Col>
          <Col span={12} className="order-products">
            <h3 className=" mt-2 text-center">Products</h3>
            {items.map((product, id) => (
            <OrderProduct key={id} product={product} />))}
          </Col>
          <p>Total: {total}</p>
        </Fragment>
      ) : (
        <div className="text-center mt-2">
          "Your Request Submitted You Can Back to Shopping Again"
          <Link to="/products">Products</Link>
        </div>
      )}
    </Row>
  );
};

export default Order;
