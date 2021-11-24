import React from 'react';
import './ToolBar.css'

const ToolBarItem = ({children}) => {
  return (
    <div data-component="ToolBarItem" className="ToolBarItem">{children}</div>
  )
}

export default ToolBarItem