import React from 'react';
import "./ListView.css";
import ListViewItem from "./ListViewItem";

const ListView = ({ title, items }) => {
  return (
    <div className="ListView">
      {items.map((item) => (
        <ListViewItem id={item.id} title={item.title} />
      ))}
    </div>
  );
};

export default ListView;
