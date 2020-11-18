import React from "react";
import { Formik, Field, Form } from "formik";
import {InputControl as Input} from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { schema } from "./OrderFormSchema";
const OrderForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        address: "",
        phone: "",
        email: "",
      }}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      {({ values: { phone, email, address } }) => (
        <Form>
          <Field
            component={Input}
            name="email"
            type="text"
            placeholder="Your Email"
            value={email}
          />

          <Field
            component={Input}
            name="phone"
            type="number"
            placeholder="Your Phone"
            value={phone}
          />
          <Field
            component={Input}
            name="email"
            type="text"
            placeholder="Your Address"
            value={address}
          />
          <Button content="Order Now" type="submit" />
        </Form>
      )}
    </Formik>
  );
};
export default OrderForm;
