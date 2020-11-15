import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { bookSearch } from "../../network/apis/Requests/Books";
import InputControl from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./BookList.css";
const BookListSearch = () => {
  const dispatch = useDispatch();

  /* Submit Process */
  const onSubmit = (values) => {
    console.log(values, "val");
    //dispatch(bookSearch(values));
  };

  return (
    <div>
      <Formik onSubmit={onSubmit} initialValues={{
        search: ''
      }}>
        {({ setFieldValue }) => (
          <Form className="book-search-form">
            <InputControl
              type="text"
              placeholder="Search By Name"
              name="search"
              onChange={(event) => setFieldValue("search", event.target.value)}
            />
            <Button type="submit" label="search" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookListSearch;
