import React from "react";
import store from "../store";
import './App.scss'
import Routes from "../routes/routes";
import Loading from "../components/loading/Loading";
function App() {
  return (
    <>
      { store.getState().isLoading && <Loading /> }
      <Routes />
    </>
  );
}

export default App;
