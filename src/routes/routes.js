import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import BookList from "../pages/BookList/BookList";
import { browserHistory } from './history'
export default function Routes() {
  return (
    <Router history={browserHistory}>
      <div>
        <Switch>
          <Route exact path="/" component={BookList}/>
        </Switch>
      </div>
    </Router>
  );
}
