import React from "react";
import Appbar from "../../Components/Appbar/Appbar";
import Drawer from "../../Components/Drawer/Drawer";
import { Outlet } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="sidebar">
        <Drawer />
      </div>
      <div className="container">
        <Appbar />
        <Outlet />
        </div>
    </div>
  );
};

export default Home;
