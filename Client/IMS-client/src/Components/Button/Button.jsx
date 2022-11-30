import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const CustomButton = ({ children, otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };
  const configButton = {
    ...otherProps,
    variant: "contained",
    fullWidth: true,
    onClick: handleSubmit,
  };
  return (
    <div>
      <Button {...configButton}>{children}</Button>
    </div>
  );
};

export default CustomButton;
