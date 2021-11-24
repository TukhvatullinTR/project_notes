import React from 'react';
import './Content.css'

const Container = ({children}) => {
  return (
    <section className="Content">
      {children}
    </section>
  )
}

export default Container
