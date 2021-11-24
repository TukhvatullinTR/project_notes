import React from 'react';
import './ToolBar.css'

const ToolBar = ({children}) => {
  return (
    <div data-component="ToolBar" className="ToolBar">{children}</div>
  )
}

export default ToolBar