import React from 'react';
import "./SideBar.css";

const SideBar = ({ children }) => {
  return <aside className="SideBar">{children}</aside>;
};

export default SideBar;
