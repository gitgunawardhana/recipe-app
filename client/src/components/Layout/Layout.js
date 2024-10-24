import React from 'react'
import { Navbar } from '../Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div className="px-2 md:px-10 lg:px-32">{children}</div>
    </>
  )
}

export default Layout