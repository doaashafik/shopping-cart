import React, { Fragment } from "react";
import { Dropdown, Menu, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  MinusSquareOutlined,
  PlusSquareOutlined,
  DeleteOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {
  deleteCartItem,
  IncreaseCartItem,
  DecreaseCartItem,
} from "../../../store/Cart/actions";

const CartProducts = ({ name }) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.cart);
  return (
    <>
      {items.length > 0 ? (
        <Fragment>
          {items.map(({ title, id, count }) => (
            <div key={id} className="cart-product">
              <span>
                <strong>Name</strong> {" "} {title} {" "} 
                <strong>Count</strong> {" "} {count}
              </span>{" "}
              <Button type="button" onClick={() => dispatch(deleteCartItem(id))}>
                <DeleteOutlined />
              </Button> {" "}
              <Button type="button" onClick={() => dispatch(IncreaseCartItem(id))}>
                <PlusSquareOutlined />
              </Button>{" "}
              <Button type="button" onClick={() => dispatch(DecreaseCartItem(id))}>
                <MinusSquareOutlined />
              </Button>{" "}
            </div>
          ))}
          <a href={"/order-review"} className="order-review">Review Order</a>
        </Fragment>
      ) : (
        <strong>Start Shopping Now!</strong>
      )}
    </>
  );
};
const CartMenu = (
  <Menu>
    <Menu.Item>
      <CartProducts />
    </Menu.Item>
  </Menu>
);

const CartDropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={CartMenu}>
      <Button
        style={{
          border: "none",
          padding: 0,
        }}
      >
        <ShoppingCartOutlined
          style={{
            fontSize: 20,
            verticalAlign: "top",
          }}
        />
      </Button>
    </Dropdown>
  );
};
export default CartDropdownMenu;
