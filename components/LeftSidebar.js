import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/left-sidebar.module.css";

const LeftSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`left-sidebar${!isOpen ? " open" : ""}`}>
      <div className="left-sidebar-header">
        <h3>Left Sidebar</h3>
        <div className="left-sidebar-handle" onClick={toggleSidebar}>
          <i className={`fas fa-chevron-${isOpen ? "right" : "left"}`}></i>
        </div>
      </div>
      <div className="container">
        <h1>Clients List</h1>
      </div>
    </div>
  );
};

export default LeftSidebar;
