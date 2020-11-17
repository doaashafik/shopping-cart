import { Formik, Form } from "formik";
import Button from "../button/Button";
import { Col, Row } from "../../components/profile/node_modules/antd";
import { SearchOutlined } from "@ant-design/icons";
import { Field } from "formik";
import { InputControl } from "../../components/input/Input";
const FormOrder = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={{ phone: "", address: "", email: "" }}
      >
        {({ values }) => {
          const { search } = values;
          return (
            <Row justify="center">
              <Col span={12}>
                <Form className="d-flex">
                  <Field
                    component={InputControl}
                    type="text"
                    placeholder="Your Email"
                    name="email"
                    value={search}
                  />
                  <Field
                    component={InputControl}
                    type="number"
                    placeholder="Phone Number"
                    name="phone"
                    value={phone}
                  />
                  <Field
                    component={InputControl}
                    type="text"
                    placeholder="Your Address"
                    name="address"
                    value={address}
                  />
                  <Button type="submit" content={<SearchOutlined />} />
                </Form>
              </Col>
            </Row>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormOrder;
