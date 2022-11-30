import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const Textfield = ({ name, ...othersProps }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...othersProps,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helpertext = meta.error;
  }

  return (
    <>
      <TextField {...configTextField} />
    </>
  );
};

export default Textfield;
