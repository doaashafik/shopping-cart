import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./ProductCard.scss";
import { Notification } from "../notification/Notification";
const ProductCard = ({ product, addToCart }) => {
  const { price, image, category, title, id } = product;
  return (
    <Card
      cover={
        <Link to={`/products/${id}`} className="product-image">
          <img src={image} alt="product-image" />
        </Link>
      }
      bordered={true}
      style={{ width: 300, margin: "0 5px 5px 0" }}
    >
      <p className="d-flex justify-content-between">
        <strong>{title}</strong>
        <Notification>
          {({ notifiy }) => (
            <span
              onClick={async () => {
                await notifiy({
                  title,
                  message: "Your Item Added Successfully To Shopping Cart",
                });
                await addToCart();
              }}
            >
              <ShoppingCartOutlined
                style={{ fontSize: "25px", color: "green" }}
              />
            </span>
          )}
        </Notification>
      </p>
      <p className="d-flex justify-content-between">
        <strong>{category}</strong>
        <strong>{price}</strong>
      </p>
    </Card>
  );
};
export default ProductCard;
