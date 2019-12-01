import React from 'react'
import '../styles/layout.scss'

const Layout = ({ children }) => {
  return (
    <>
      <main className='site-content'>
        {children}
      </main>
      <footer className='footer'>
        <p>Built for fun by <a target='_blank' rel="noopener noreferrer" href='https://www.onewiththebeard.dev/'>Andy</a> 🤓</p>
        <p>Source available on <a target='_blank' rel="noopener noreferrer" href='https://github.com/tappyy/what-is-anne-up-to'>Github</a> 💜</p>
      </footer>
    </>
  )
}

export default Layout
