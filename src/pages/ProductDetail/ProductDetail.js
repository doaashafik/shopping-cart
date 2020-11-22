import React, { Fragment, useState, useEffect } from "react";
import "./ProductDetail.scss";
import { productDetailsRequest } from "../../network/apis/Requests/Product";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";
import { AddToCart } from "../../components/addToCart/AddToCart";
import { Notification, open } from "../../components/notification/Notification";
import { useSelector } from "react-redux";
const ProductDetail = ({}) => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    productDetailsRequest(id).then(({ data }) => {
      setData({
        product: data,
        recieved: true,
      });
    });
  }, []);

  const { recieved, product } = data;
  const item = items.filter((i) => i.id == product.id);
  return (
    <Fragment>
      {recieved && (
        <div className="product-card-border-less-wrapper">
          <p>{product.title}</p>
          <div className="product-image">
            <img src={product.image} alt="product" />
          </div>
          <div className=" mt-2 d-flex justify-content-around">
            <p>{product.category}</p>
            <p>{product.price}</p>
          </div>
          <AddToCart
            item={{ ...product, count: item.length > 0 ? item[0].count : 0 }}
            notifiy={open}
          />
          <p className="mt-2">{product.description}</p>
        </div>
      )}
    </Fragment>
  );
};
export default ProductDetail;
