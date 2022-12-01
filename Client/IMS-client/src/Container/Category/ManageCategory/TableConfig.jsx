import { Stack, Button } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70,  },
  { field: "category", headerName: "Category", width: 200, },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    align: 'center',
    sortable: false,
    disableClickEventBubbling: true,

    renderCell: (params) => {
      const onClick = (e) => {
        const currentRow = params.row;
        return alert(JSON.stringify(currentRow, null, 4));
      };

      return (
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={onClick}
        >
          Active
        </Button>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 300,
    align: 'center',
    disableClickEventBubbling: true,

    renderCell: (params) => {
      const onClick = (e) => {
        const currentRow = params.row;
        return alert(JSON.stringify(currentRow, null, 4));
      };

      return (
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="warning"
            size="small"
            onClick={onClick}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={onClick}
          >
            Delete
          </Button>
        </Stack>
      );
    },
  },
];

export default columns;
