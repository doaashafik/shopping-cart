import React, { useEffect, Fragment } from "react";
import OrderForm from "./OrderForm/OrderForm";
import { OrderProduct } from "./OrderProducts/OrderProducts";
import { Row, Col } from "antd";
import { submitUserOrder, getTotal } from "../../store/Cart/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import './Order.scss'
const Order = ({ history }) => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  useEffect(()=> {
   dispatch(getTotal())
 },[total])


  const submitForm = (values) => {
    dispatch(submitUserOrder(values));
  };

  const redirectToMainPage= () => {
    setTimeout(()=>{history.push('/products');}, 3000);
  }

  return (
    <Row>
      {items.length > 0 ? (
        <Fragment>
          <Col className="order-now" span={10}>
            <h3 className="mt-2">Order Now</h3>
            <OrderForm submitForm={submitForm} />
          </Col>
          <Col span={10} className="order-products">
              <h3 className="mt-2">Products</h3>
            {items.map((product, id) => (
              <OrderProduct key={id} product={product} />))}
              <strong>Total: {total}</strong>
          </Col>
        </Fragment>
      ) : (
        <div>
          <h3 className="text-center mt-2">Ok it's Done!,Back to Shopping Again!
          <Link to="/products">Products</Link> </h3> {redirectToMainPage()}
        </div>
      )}
    </Row>
  );
};

export default withRouter(Order);
