import React from "react";

const BookCard = (props) => {
  const { imageLinks, description, title, publisher, id } = props;
  return (
    <div key={id} className="d-flex book-search-item">
      {imageLinks && (
        <div>
          <img src={imageLinks.thumbnail} alt="small-thumbnail-book" />
        </div>
      )}
      <section>
        <p>
          <strong>Title:</strong> {title}
        </p>
        <p>
          <strong>Publisher: </strong> {publisher}
        </p>
        {description && (
          <p className="book-search-description">
            <strong>Description: </strong> {description}
          </p>
        )}
      </section>
    </div>
  );
};
export default BookCard;
