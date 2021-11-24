import React from 'react';
import './ListView.css'

const ListViewItem = ({id, title}) => {
  return (
    <div key={id} className="ListViewItem">{title}</div>
  )
}

export default ListViewItem
