import React from "react";
import AddCategory from "../AddCategory/AddCategory";
import ManageCategory from "../ManageCategory/ManageCategory";
import "./category.scss";

const Category = () => {
  return (
    <div className="category">
      <AddCategory />
      <ManageCategory />
    </div>
  );
};

export default Category;
