import React from "react";
import { Link } from "react-router-dom";
import "./drawer.scss";

const Drawer = () => {
  return (
    <div className="drawer">
      <div className="top">
        <h3 className="logo">IMS</h3>
      </div>
      <div className="center">
        <p className="tittle">Main</p>
        <li className="drawer-item">
          <Link to="dashboard">
            <img
              className="icons"
              src="https://img.icons8.com/color/2x/dashboard-layout.png"
              alt="Dashboard"
            />{" "}
            Dashboard{" "}
          </Link>
        </li>
        <p className="tittle">Lists</p>
        <li className="drawer-item">
          <Link to="users">
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/512/747/747545.png"
              alt="User"
            />{" "}
            Users{" "}
          </Link>
        </li>
        <li className="drawer-item">
          <Link to="category">
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/512/2816/2816954.png"
              alt="Category"
            />{" "}
            Category{" "}
          </Link>
        </li>
        <li className="drawer-item">
          <Link to="products">
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/128/9005/9005812.png"
              alt="Products"
            />{" "}
            Products{" "}
          </Link>
        </li>
        <li className="drawer-item">
          <Link to="orders">
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/128/5643/5643764.png"
              alt="Orders"
            />{" "}
            Orders
          </Link>
        </li>
        <p className="tittle">Services</p>
        <li className="drawer-item">
          <Link to="reports">
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/512/1170/1170616.png"
              alt="Reports"
            />{" "}
            Reports
          </Link>
        </li>
        <li className="drawer-item">
          <Link to="settings">
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/512/2965/2965279.png"
              alt="Settings"
            />{" "}
            Settings
          </Link>
        </li>
      </div>
      <div className="buttom">
        <p>color options</p>
      </div>
    </div>
  );
};

export default Drawer;
