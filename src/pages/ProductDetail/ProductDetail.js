import React, { useState, Fragment } from "react";
import "./ProductDetail.scss";
import { productDetailsRequest } from "../../network/apis/Requests/Product";
import { withRouter } from "react-router-dom";
class ProductDetail extends React.Component {
  state = {
    data: {},
  };
  componentDidMount() {
    productDetailsRequest(1).then(({ data }) => {
      this.setState({
        data,
      });
    });
  }

  render() {
    const { price, image, category, title, description } = this.state.data;
    return (
      <div className="site-card-border-less-wrapper">
        {image && (
          <div className="product-image">
            <img src={image} alt="product-image" />
          </div>
        )}
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
        <p>
          <strong>Description: {description} </strong>
          {price}
        </p>
      </div>
    );
  }
}
export default withRouter(ProductDetail);
