import * as React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import SelectField from "../../../Components/SelectField/SelectField";
import Textfield from "../../../Components/TextField/TextField";
import CustomButton from "../../../Components/Button/Button";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { getCategory, postCategory } from "../../../Api/fetchCategory";

const validationSchema = yup.object({
  category: yup.string().required("Required"),
  status: yup.string().required("Required"),
});

const INITIAL_VAL = {
  category: "",
  status: "",
};

const AddCategory = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Category
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill up the below form and click Add Category button to add category. Click Cancel to close this window.
          </DialogContentText>
          <Formik
            initialValues={INITIAL_VAL}
            validationSchema={validationSchema}
            onSubmit={async (value, { setSubmitting, resetForm }) => {
              const response = await postCategory(value);
              if(response){
                await getCategory()
                setOpen(false)
              }
            }}
          >
            <Form
              autoCapitalize="true"
              autoComplete="false"
              className="catgory-form"
            >
              <Textfield
                autoFocus
                margin="dense"
                id="name"
                name="category"
                label="Category"
                fullWidth
                required
              />
              <SelectField
                className="selectfield"
                label="Status"
                name="status"
                options={["Active", "Inactive"]}
                fullWidth
                required
              />
              <DialogActions sx={{mt:5, display : "flex", gap: 2}}>
                <CustomButton type="submit" children="Add Category" />
                <Button onClick={handleClose} > Cancel</Button>
              </DialogActions>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddCategory;
