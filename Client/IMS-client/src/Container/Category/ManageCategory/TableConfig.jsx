import { Stack, Button } from "@mui/material";
import makeStyles from "@mui/styled-engine";
import { changeCategoryStatus, deleteCategory } from "../../../Api/fetchCategory";

const imgStyle = {
  height: "25px",
  width: "25px",
};

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "category", headerName: "Category", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    align: "center",
    sortable: false,
    disableClickEventBubbling: true,

    renderCell: (params) => {
      const onClick =async (id,category, status) => {
        const response = await changeCategoryStatus(id, category,status)
      };

      return (
        <Button
          variant={params.row.status === "Active" ? "outlined" : "contained"}
          color={params.row.status === "Active" ? "primary" : "error"}
          size="small"
          onClick={()=>onClick( params.row._id, params.row.category, params.row.status)}
        >
          {params.row.status === "Active" ? "Active" : "Inactive"}
        </Button>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 300,
    align: "center",
    disableClickEventBubbling: true,

    renderCell: (params) => {
      const onClick = async (id) => {
        const response = await deleteCategory(id);
        console.log(response);
      };

      return (
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="warning"
            size="small"
            onClick={onClick}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3218/3218971.png"
              style={imgStyle}
            />
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => onClick(params.row._id)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
              style={imgStyle}
            />
          </Button>
        </Stack>
      );
    },
  },
];

export default columns;
