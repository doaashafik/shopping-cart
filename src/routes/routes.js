import React, { Suspense } from "react";
import {  Router, Switch, Route } from "react-router-dom";
import { browserHistory } from "./history";
import Loading from "../components/loading/Loading";
import PrivateRoute from "./PrivateRoute";

const ProductList = React.lazy(() => import("../pages/ProductList/ProductList"));
const ProductDetail = React.lazy(() => import("../pages/ProductDetail/ProductDetail"));

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRoute exact  path="/products" component={ProductList} />
          <PrivateRoute exact path="/products/:id" component={ProductDetail} />
        </Switch>
      </Suspense>
    </Router>
  );
}
