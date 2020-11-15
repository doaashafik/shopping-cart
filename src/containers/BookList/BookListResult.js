import { useSelector } from "react-redux";
import { getBooks } from "../../Store/selectors/book";
const BookListResult = () => {
  const { data, isLoading } = useSelector(getBooks);
  return (
    <div className="book-search-result">
      {isLoading && <p className="text-center">is Loading....</p>}
      {!isLoading && data && (
        <div className="mt-2">
          {data.items.map((item, id) => (
            <div key={id} className="d-flex book-search-item">
              {item.volumeInfo.imageLinks && (
                <img
                  src={item.volumeInfo.imageLinks.smallThumbnail}
                  alt="small-thumbnail-book"
                />
              )}
              <section>
              <p>
                <strong>Title:</strong> {item.volumeInfo.title}
              </p>
              <p>
                <strong>Publisher: </strong> {item.volumeInfo.publisher}
              </p>
              <p>
                <strong>Publisher: </strong> {item.volumeInfo.description}
              </p>
              </section>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookListResult;
