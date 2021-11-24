import React from 'react';
import './Content.css'

const Container = ({children}) => {
  return (
    <section data-component="Container" className="Content">
      {children}
    </section>
  )
}

export default Container
