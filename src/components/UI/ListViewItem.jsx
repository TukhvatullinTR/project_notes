import React from 'react';
import './ListView.css'

const ListViewItem = ({id, title}) => {
  return (
    <div key={id} data-component="ListViewItem" className="ListViewItem">{title}</div>
  )
}

export default ListViewItem
