import React, { Fragment } from "react";
import { Button, Badge } from "antd";
import { useDispatch } from "react-redux";
import "./CartProducts.scss";
import {
  MinusSquareOutlined,
  PlusSquareOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  deleteCartItem,
  IncreaseCartItem,
  DecreaseCartItem,
} from "../../store/Cart/actions";

export const CartProducts = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      {items.map(({ title, total, price, id, image, count }) => (
        <div key={id + 'product'} className="cart-product d-flex">
          <div className="content">
            <p>{title}</p>
            <p>{price}</p>
          </div>

          <div className="product-image">
            <img src={image} alt="product-image" />
          </div>
          <div>
            <PlusSquareOutlined
              onClick={() => dispatch(IncreaseCartItem(id))}
              className="product-icon"
            />{" "}
            <Badge count={count} className="badge-icon" />{" "}
            <MinusSquareOutlined
              onClick={() => dispatch(DecreaseCartItem(id))}
              className="product-icon"
            />
            <br />
            <DeleteOutlined
              onClick={() => dispatch(deleteCartItem(id))}
              className="mt-2 product-icon"
            />
          </div>
        </div>
      ))}
    </Fragment>
  );
};
