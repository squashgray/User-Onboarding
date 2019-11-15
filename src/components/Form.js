import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Forms(props) {
  return (
    <div className="form-container">
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          password: "",
          tos: false
        }}
        validationSchema={Yup.object({
          fname: Yup.string()
            .min(2, "Must be at least 2 characters!")
            .required("First Name Required"),
          lname: Yup.string()
            .min(2, "Must be at least 2 characters!")
            .required("Last Name Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email Required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long!")
            .required("Password required"),
          tos: Yup.boolean()
            .oneOf([true], "Must accept Terms and Conditions!")
            .required("required")
        })}
        onSubmit={props.handleSubmit}
        children={props => {
          return (
            <Form>
              <Field type="text" name="fname" placeholder="First Name" />
              <ErrorMessage name="fname" component="div" className="red" />
              <Field type="text" name="lname" placeholder="Last Name" />
              <ErrorMessage name="lname" component="div" className="red" />
              <Field type="text" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="red" />
              <Field type="text" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="red" />
              <label>
                Click here if you accept Terms and Conditions ==>
                <Field type="checkbox" name="tos" />
              </label>
              <ErrorMessage name="tos" component="div" className="red" />
              <input type="submit" />
            </Form>
          );
        }}
      />
    </div>
  );
}

export default Forms;
