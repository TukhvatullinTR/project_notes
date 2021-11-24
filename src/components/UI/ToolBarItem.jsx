import React from 'react';
import './ToolBarItem.css'

const ToolBarItem = ({children}) => {
  return (
    <div className="ToolBarItem">{children}</div>
  )
}

export default ToolBarItem