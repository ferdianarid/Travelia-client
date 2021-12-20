import React from 'react'
import Navbar from "../components/Navbar"

const LayoutsIndex = ({ children }) => {
       return (
              <React.Fragment>
                     <Navbar />
                     { children }
              </React.Fragment>
       )
}

export default LayoutsIndex
