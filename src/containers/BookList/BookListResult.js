import { useSelector } from "react-redux";
import { getBooks } from "../../Store/selectors/book";
const BookListResult = () => {
  const { data, isLoading } = useSelector(getBooks);
  return (
    <div className="book-search-result">
      {isLoading && <p className="text-center">is Loading....</p>}
      {!isLoading && data && (
        <ul>
          {data.map((item, id) => (
            <li key={id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookListResult;
