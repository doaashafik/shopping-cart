import React, { Fragment } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  MinusSquareOutlined,
  PlusSquareOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  deleteCartItem,
  IncreaseCartItem,
  DecreaseCartItem,
} from "../../../../store/Cart/actions";

export const HeaderCartProducts = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  return (
    <>
      {items.length > 0 ? (
        <Fragment>
          {items.map(({ title, id, count }) => (
            <div key={id} className="cart-product">
              <span>
                <strong>Name</strong> {title} <strong>Count</strong> {count}
              </span>{" "}
              <Button
                type="button"
                onClick={() => dispatch(deleteCartItem(id))}
              >
                <DeleteOutlined />
              </Button>{" "}
              <Button
                type="button"
                onClick={() => dispatch(IncreaseCartItem(id))}
              >
                <PlusSquareOutlined />
              </Button>{" "}
              <Button
                type="button"
                onClick={() => dispatch(DecreaseCartItem(id))}
              >
                <MinusSquareOutlined />
              </Button>{" "}
            </div>
          ))}
          <a href={"/shopping-cart/#/order"} className="order-review">
            Review Order
          </a>
        </Fragment>
      ) : (
        <strong>Start Shopping Now!</strong>
      )}
    </>
  );
};
