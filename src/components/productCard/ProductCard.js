import React, { useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "./ProductCard.scss";
import { useSelector } from "react-redux";
const ProductCard = ({ product, addToCart }) => {
  const { items } = useSelector(state => state.cart);
  const isDisabled = items.filter(item => item.id == product.id).length > 0;
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
        <p>
          <strong>Name: </strong> {title}
        </p>
        <p>
          <strong>Category: </strong> {category}
        </p>
        <p>
          <strong>Price: </strong>
          {price}
        </p>
        <Button
          content={"Add To Cart"}
          type="button"
          disabled={isDisabled}
          onClick={addToCart}
        />
      </Card>
  );
};
export default ProductCard;
