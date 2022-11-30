import React from "react";
import { TextField,MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectField = ({ name, options, ...othersProps }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const configSelect = {
    ...field,
    ...othersProps,
    select: true,
    variant: "outlined",
    onChange: handleChange,
  };

  if(meta && meta.touched && meta.error){
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return (
    <div>
      <TextField {...configSelect}>
        {options && options.map((item, position)=>{
            return (
                <MenuItem key = {position} value ={item}> {item} </MenuItem>
            )
        })}
      </TextField>
    </div>
  );
};

export default SelectField;
