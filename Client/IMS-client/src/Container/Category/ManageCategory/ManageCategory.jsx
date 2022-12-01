import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Columns from "./TableConfig";
import { getCategory } from "../../../Api/Category";
import "./manageCategory.scss"

const ManageCategory = () => {
  const [category, setCategory] = useState([]);
  const columns = Columns;
  const rows = category;

  const getCategories = async () => {
    const categories = await getCategory();
    if (categories) {
      categories.map((item, index) => {
        item.id = index+1;
      });
    }
    setCategory(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div
      className="tableData"
      style={{
        height: 400,
        width: "60%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default ManageCategory;
