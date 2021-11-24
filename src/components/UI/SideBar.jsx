import React from 'react';
import "./SideBar.css";

const SideBar = ({ children }) => {
  return <aside data-component="SideBar" className="SideBar">{children}</aside>;
};

export default SideBar;
