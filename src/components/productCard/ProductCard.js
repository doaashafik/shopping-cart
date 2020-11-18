import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "./ProductCard.scss";
const ProductCard = ({ product, addToCart }) => {
  const { price, image, category, title, id } = product;
  return (
    <Link to={`/products/${id}`} className="site-card-border-less-wrapper">
      <Card
        cover={
          <div className="product-image">
            <img src={image} alt="product-image" />
          </div>
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
          onClick={addToCart}
        />
      </Card>
    </Link>
  );
};
export default ProductCard;
