import React from "react";
import BookListSearch from "./BookListSearch";
import BookListResult from "./BookListResult";
import './BookList.scss'
const BookList = () => {
 
  return (
    <div className="book-list-container">
      <h1 className="text-center">Book Finder</h1>
      <BookListSearch />
      <BookListResult />
    </div>
  );
};
export default BookList;
