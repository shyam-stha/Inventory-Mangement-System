import React from "react";
import AddCategory from "../AddCategory/AddCategory";
import ManageCategory from "../ManageCategory/ManageCategory";
import "./category.scss";

const Category = () => {
  return (
    <div className="category">
      <p className="headings top">Category</p>
      <div className="add-category">
        <AddCategory />
      </div>
      <div className="manage-category">
       <h3 className="headings bottom">Manage Category</h3>
        <ManageCategory />
      </div>
    </div>
  );
};

export default Category;
