import React, { Suspense, Fragment } from "react";
import {  Router, Switch, Redirect } from "react-router-dom";
import { browserHistory } from "./history";
import Loading from "../components/loading/Loading";
import PrivateRoute from "./PrivateRoute";
import { ProductDetail, ProductList } from '../utils/LazyLoad'

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Suspense fallback={<Loading/>}>
        <Switch>
          <PrivateRoute exact  path="/products" component={ProductList} />
          <PrivateRoute exact path="/products/:id" component={ProductDetail} />
          <Redirect from="/" to="products" />
        </Switch>
      </Suspense>
    </Router>
  );
}
