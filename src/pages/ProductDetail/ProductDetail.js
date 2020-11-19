import React, { Fragment } from "react";
import "./ProductDetail.scss";
import { productDetailsRequest } from "../../network/apis/Requests/Product";
import { withRouter } from "react-router-dom";
import './ProductDetail.scss'
class ProductDetail extends React.Component {
  state = {
    product: {},
  };
  componentDidMount() {
    const {
      params: { id },
    } = this.props.match;
    productDetailsRequest(id).then(({ data }) => {
      this.setState({
        product: data,
        recieved: true
      });
    });
  }

  render() {
    const {recieved, product } = this.state;
    const { price, image, category, title, description } = product;
    return (
      <Fragment>
        {recieved && (
          <div className="product-card-border-less-wrapper">
            <p>
              <strong>{title}</strong>
            </p>
            <div className="product-image">
              <img src={image} alt="product" />
            </div>
            
            <p>
              <strong>Category: </strong> {category}
            </p>
            <p>
              <strong>Price: </strong>
              {price}
            </p>
            <p>
              <strong>Description: </strong>
              {description}
            </p>
          </div>
        )}
      </Fragment>
    );
  }
}
export default withRouter(ProductDetail);
