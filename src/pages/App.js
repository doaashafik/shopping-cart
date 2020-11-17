import React, { Fragment } from "react";
import "./App.scss";
import Routes from "../routes/routes";
import { useSelector } from "react-redux";
import Loading from "../components/loading/Loading";
function App() {
  const loading = useSelector((state) => state.isLoading);
  return (
    <Fragment>
      {loading && <Loading />}
      <Routes />
    </Fragment>
  );
}

export default App;
