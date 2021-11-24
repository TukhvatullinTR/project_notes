import React from 'react';
import './Header.css'

const Header = ({children}) => {
  return (
    <header data-component="Header" className="Header">{children}</header>)
}

export default Header;