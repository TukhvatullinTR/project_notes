import React, { useState } from "react";
import "./Tabs.css";

export const Tabs = ({ id, children }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="Tabs">
      <div className="TabHeaders">
        {children.map((tab, index, id) => {
          return (
            <div
              key={`tabheader-${index}`}
              className="TabHeader"
              data-selected={index === current}
              onClick={(e) => setCurrent(index)}
            >
              {tab.props.title}
            </div>
          );
        })}
      </div>
      <div className="TabPanels">
        {children.map((tab, index) => {
          return (
            <div
              key={`tabpanel-${index}`}
              className="TabPanel"
              data-selected={index === current}
            >
              {tab.props.children}
            </div>
          );
        })}
      </div>
    </div>
  );
};
