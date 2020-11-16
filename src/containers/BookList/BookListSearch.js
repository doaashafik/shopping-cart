import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import { BookSearch } from "../../store/actions/book";
import { InputControl } from "../../components/input/Input";
import { Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const BookListSearch = () => {
  const dispatch = useDispatch();

  /* Submit Process */
  const onSubmit = (query, { resetForm }) => {
    dispatch(BookSearch(query.search));
    resetForm({})
  };

  return (
    <div>
      <Formik onSubmit={onSubmit} initialValues={{ search: "" }}>
        {({ setFieldValue, values }) => {
          const { search } = values;
          return (
            <Row justify="center">
            <Col span={12}>
              <Form className="d-flex">
                <InputControl
                  type="text"
                  placeholder="Search By Name"
                  name="search"
                  value={search}
                  onChange={(event) => setFieldValue("search", event.target.value)}
                />
                <Button type="submit" content={<SearchOutlined />} />
              </Form>
            </Col>
          </Row>
          )
        }}
      </Formik>
    </div>
  );
};

export default BookListSearch;
