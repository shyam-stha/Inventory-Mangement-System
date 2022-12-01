import React from "react";
import AddCategory from "../AddCategory/AddCategory";
import ManageCategory from "../ManageCategory/ManageCategory";
import "./category.scss";

const Category = () => {
  return (
    <div className="category">
      <h3 className="headings">Category</h3>
      <AddCategory />
      <div className="manage-category">
        Manage Category
        <ManageCategory />
      </div>
    </div>
  );
};

export default Category;
