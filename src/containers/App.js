import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import './App.scss'
import BookList from "./BookList/BookList";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
