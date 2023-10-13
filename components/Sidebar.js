import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../components/sidebar.module.css"; // You can create this CSS file to style the sidebar

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = (path) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  const menuItems = [
    { label: "Events", path: "/events" },
    { label: "Directories", path: "/directories" },
    { label: "About Us", path: "/about-us" },
    // Add more pages as needed
  ];

  return (
    <div className={`sidebar${isOpen ? " open" : ""}`}>
      <div className="sidebar-header">
        <h3>Right Sidebar</h3>
        <div className="sidebar-handle" onClick={toggleSidebar}>
          <i className={`fas fa-chevron-${isOpen ? "left" : "right"}`}></i>
          {isMenuOpen && (
            <div className={styles.menuItems}>
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={styles.menuItem}
                  onClick={() => handleMenuItemClick(item.path)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
