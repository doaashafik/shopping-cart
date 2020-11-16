import { useSelector } from "react-redux";
import { getBooks } from "../../Store/selectors/book";
import { LoadingOutlined } from "@ant-design/icons";
const BookListResult = () => {
  const { data, isLoading } = useSelector(getBooks);
  return (
    <div className="book-search-result">
      {isLoading && (
        <p className="text-center">
          <LoadingOutlined />
        </p>
      )}
      {!isLoading && data && (
        <div className="mt-2">
          {data.items.map((item, id) => {
            const {
              description,
              title,
              publisher,
              imageLinks,
            } = item.volumeInfo;
            return (
              <div key={id} className="d-flex book-search-item">
                {imageLinks && (
                  <div>
                    <img
                      src={imageLinks.thumbnail}
                      alt="small-thumbnail-book"
                    />
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
          })}
        </div>
      )}
    </div>
  );
};

export default BookListResult;
