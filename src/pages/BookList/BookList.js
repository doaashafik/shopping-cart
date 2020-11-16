import React from "react";
import BookListSearch from "./BookListSearch";
import { getBooks } from "../../store/selectors/book";
import { useDispatch, useSelector } from "react-redux";
import { BookSearch } from "../../store/actions/book";
import "./BookList.scss";
import BookCard from "../../components/bookCard/BookCard";

const BookList = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector(getBooks);

  /* Submit Process */
  const onSubmit = (query) => {
    dispatch(BookSearch(query.search));
  };

  return (
    <div className="book-list-container">
      <h1 className="text-center">Book Finder</h1>
      <BookListSearch onSubmit={onSubmit} />
      {!error && data && (
        <div className="mt-2">
          {data.items?.map((item, id) => (
            <BookCard id={id} book={item.volumeInfo} />
          ))}
        </div>
      )}
    </div>
  );
};
export default BookList;
