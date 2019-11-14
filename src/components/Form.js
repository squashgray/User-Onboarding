import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// const validate = ({ fname, lname, email, passowrd, tos }) => {
//   const errors = {};

//   if (!fname) {
//     errors.fname = "You must input a Name";
//   } else if (fname.length < 2) {
//     errors.fname = "ay, ur name too short tho";
//   }

//   if (!lname) {
//     errors.lname = "You must input a Name";
//   } else if (lname.length < 2) {
//     errors.lname = "ay, ur name too short tho";
//   }

//   if (!password) {
//     errors.password = "You must input a Name";
//   } else if (fname.length < 2) {
//     errors.password = "ay, ur name too short tho";
//   }

//   return errors;
// };

function Forms() {
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
        // validate={validate} //

        validationSchema={Yup.object({
          fname: Yup.string()
            .min(2, "Must be at least 2 characters")
            .required("First Name Required"),
          lname: Yup.string()
            .min(2, "Must be at least 2 characters")
            .required("Last Name Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email Required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password required"),
          tos: Yup.boolean()
            .oneOf([true], "Must accept Terms and Conditions")
            .required("required")
        })}
        onSubmit={(values, tools) => {
          console.log(values, tools);
          tools.resetForm();
        }}
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
