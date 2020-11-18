import React from "react";
import { Formik, Field } from "formik";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
const OrderForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        address: "",
        phone: "",
        email: "",
      }}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form>
          <Field
            component={Input}
            name="email"
            type="text"
            placeholder="Your Email"
            value={values.email}
          />

          <Field
            component={Input}
            name="email"
            type="number"
            placeholder="Your Phone"
            value={values.email}
          />
          <Field
            component={Input}
            name="email"
            type="text"
            placeholder="Your Address"
            value={values.email}
          />
          <Button content="Order Now" type="submit" />
        </Form>
      )}
    </Formik>
  );
};
export default OrderForm;
