import React from 'react'

import '../styles/layout.scss'

const Layout = ({ children }) => {
  return (
    <main className='site-content'>
      {children}
    </main>
  )
}

export default Layout
