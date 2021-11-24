import React from 'react';
import './Container.css'

const Container = ({children}) => {
  return (
    <main data-component="Container" className="Container">
      {children}
    </main>
  )
}

export default Container
