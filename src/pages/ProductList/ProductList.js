import React from "react";

import ProductCard from "../../components/productCard/ProductCard";
import { allProductsRequest } from "../../store/Product/actions";
import { addItemToCart } from "../../store/Cart/actions";
import { connect } from "react-redux";
import { Notification } from "../../components/notification/Notification";

class ProductList extends React.Component {
  state = {
    disable: false,
  };

  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { items, products } = this.props;
    return (
      <div className="product-list-container">
        {products && (
          <div className="mt-2 d-flex flex-wrap justify-content-center">
            {products.map((item, id) => (
              <Notification>
                {({ notifiy }) => (
                  <ProductCard
                    addToCart={() => {
                      notifiy({
                        title: item.title,
                        message:
                          "Your Item Added Successfully To Shopping Cart",
                      });
                      this.props.addItem(item);
                    }}
                    key={`${id}-id`}
                    product={item}
                  />
                )}
              </Notification>
            ))}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.data,
  items: state.cart.items,
});
const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(allProductsRequest()),
  addItem: (item) => dispatch(addItemToCart(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
