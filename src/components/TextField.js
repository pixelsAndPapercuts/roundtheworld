import React from "react";

import { ErrorMessage, useField } from "formik";
import "./TextField.css";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid border-2 border-info"
        }`}
        {...field}
        {...props}
      />
      <ErrorMessage component="div" className="error" name={field.name} />
    </div>
  );
};

export default TextField;
