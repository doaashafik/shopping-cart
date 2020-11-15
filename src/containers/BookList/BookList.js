import React, { Fragment } from "react";
import BookListSearch from "./BookListSearch";
import BookListResult from "./BookListResult";
import './BookList.css'
const BookList = () => {
 
  return (
    <Fragment>
      <h1>Book Render</h1>
      <BookListSearch />
      <BookListResult />
    </Fragment>
  );
};
export default BookList;
