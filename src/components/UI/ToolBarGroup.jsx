import React from 'react';
import './ToolBar.css'

const ToolBarGroup = ({children}) => {
  return (
    <div data-component="ToolBarGroup" className="ToolBarGroup">{children}</div>
  )
}

export default ToolBarGroup