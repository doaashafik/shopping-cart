import React from "react";
import { useDispatch } from "react-redux";
import { IncreaseCartItem, DecreaseCartItem, addItemToCart } from "../../store/Cart/actions";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import './AddToCart.scss'
export const AddToCart = ({ notifiy, item }) => {
  const dispatch = useDispatch();
  const { title, id, count } = item;
  return (
    <div className="add-to-cart">
      <PlusSquareOutlined
        onClick={async () => {
         await notifiy({
            title,
            message: "Added To Cart",
          });
          if(count == 0) await dispatch(addItemToCart(item));
         else {
          dispatch(IncreaseCartItem(id));
         } 
        }}
        className="product-icon"
      />{" "}
      <Badge
        className="site-badge-count-109"
        count={count}
        showZero
        style={{ backgroundColor: "#52c41a" }}
      />{" "}
      <MinusSquareOutlined
        onClick={ async() => {
          await  notifiy({
            title,
            message: "Removed From Cart",
          });
          dispatch(DecreaseCartItem(id));
        }}
        className="product-icon"
      />
    </div>
  );
};
