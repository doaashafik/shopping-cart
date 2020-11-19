import React from "react";

import ProductCard from "../../components/productCard/ProductCard";
import { allProductsRequest } from "../../store/Product/actions";
import { addItemToCart } from "../../store/Cart/actions";
import { connect } from "react-redux";

class ProductList extends React.Component {
  state = {
    disable: false,
  };
  addToCart = (item) => {
    this.props.addItem(item);
  };


  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { items , products } = this.props;
    return (
      <div className="product-list-container">
        { products && (
          <div className="mt-2 d-flex flex-wrap">
            {products.map((item, id) => (
              <ProductCard
                addToCart={() => this.addToCart(item)}
                key={`${id}-id`}
                product={item}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps= (state) => ({
  products: state.products.data,
  items: state.cart.items
})
const mapDispatchToProps = (dispatch) => ({
getProducts: () => dispatch(allProductsRequest()),
addItem: (item) => dispatch(addItemToCart(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
