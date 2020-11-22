import React, { useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./ProductCard.scss";
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
      style={{ width: 300 }}
    >
      <p className="d-flex justify-content-between">
        <strong>{title}</strong>
        <ShoppingCartOutlined
          onClick={addToCart}
          style={{ fontSize: "25px", color: "green" }}
        />
      </p>
      <p className="d-flex justify-content-between">
        <strong>{category}</strong> 
        <strong>{price}</strong>
      </p>
    </Card>
  );
};
export default ProductCard;
