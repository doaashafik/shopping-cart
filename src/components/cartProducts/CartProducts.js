import React, { Fragment, useEffect } from "react";
import { Badge } from "antd";
import { useDispatch } from "react-redux";
import "./CartProducts.scss";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteCartItem } from "../../store/Cart/actions";
import { Notification } from "../notification/Notification";
import { AddToCart } from "../addToCart/AddToCart";
export const CartProducts = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <>
      {items.map((item) => {
        const { title, image, id, price } = item;
        return (
          <div key={id + "product"} className="cart-product d-flex">
            <div className="content">
              <p>{title}</p>
              <p>{price}</p>
            </div>

            <div className="product-image">
              <img src={image} alt="product-image" />
            </div>
            <Notification>
              {({ notifiy }) => {
                return (
                  <div>
                    <AddToCart item={item} notifiy={notifiy} />
                    <DeleteOutlined
                      onClick={async () => {
                        await notifiy({
                          title,
                          message: "Was Deleted Successfully",
                        });
                       await dispatch(deleteCartItem(id));
                      }}
                      className="mt-2 product-icon"
                    />
                  </div>
                );
              }}
            </Notification>
          </div>
        );
      })}
    </>
  );
};
