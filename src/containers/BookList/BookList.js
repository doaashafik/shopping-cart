import React, { Fragment } from "react";
import BookListSearch from "./BookListSearch";
import BookListResult from "./BookListResult";

const BookList = () => {
 
  return (
    <Fragment>
      <h1 className="text-center">Book Render</h1>
      <BookListSearch />
      <BookListResult />
    </Fragment>
  );
};
export default BookList;
