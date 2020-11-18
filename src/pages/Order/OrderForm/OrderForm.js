import React from "react";
import { Formik, Field, Form } from "formik";
import { InputControl as Input } from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { schema } from "./OrderFormSchema";
import { ErrorMessage } from "../../../components/errorMessage/ErrorMessage";
const OrderForm = ({ submitForm }) => {
  return (
    <Formik
      initialValues={{
        address: "",
        phone: "",
        email: "",
      }}
      onSubmit={submitForm}
      validationSchema={schema}
    >
      {({errors,  values: { phone, email, address } }) => (
        <Form>
          <label>Email</label>
          <Field
            component={Input}
            name="email"
            type="text"
            placeholder="Your Email"
            value={email}
          />
          <ErrorMessage message={errors.email} />
          <br />
          <label>Phone</label>
          <Field
            component={Input}
            name="phone"
            type="text"
            placeholder="Your Phone"
            value={phone}
          />
          <ErrorMessage message={errors.phone} />
          <br />
          <label>Address</label>
          <Field
            component={Input}
            name="address"
            type="text"
            placeholder="Your Address"
            value={address}
          />
          <ErrorMessage message={errors.address} />
          <Button content="Order Now" type="submit" />
        </Form>
      )}
    </Formik>
  );
};
export default OrderForm;
