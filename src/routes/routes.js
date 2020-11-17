import React, { Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { browserHistory } from "./history";
import Loading from "../components/loading/Loading";
import PrivateRoute from "./PrivateRoute";

const BookList = React.lazy(() => import("../pages/BookList/BookList"));
export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRoute exact path="/" component={BookList} />
        </Switch>
      </Suspense>
    </Router>
  );
}
