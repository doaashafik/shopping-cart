import React from "react";
import Button from '../button/Button'
const ProductCard = ({ product }) => {
  const { price, image, category, title } = product;
  return (
    <div>
      <div>{<img src={image} alt="product-image" />}</div>
      <p>{title}</p>
      <p>{category}</p>
      <p>{price}</p>
      <Button content={'Add To Cart'} type="button" onClick={} />
    </div>
  );
};
export default ProductCard;
