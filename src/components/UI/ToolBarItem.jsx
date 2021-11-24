import React from 'react';
import './ToolBar.css'

const ToolBarItem = ({children}) => {
  return (
    <div className="ToolBarItem">{children}</div>
  )
}

export default ToolBarItem