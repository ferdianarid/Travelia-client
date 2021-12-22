import React from 'react'
import Footer from '../components/Footer'

const LayoutsIndex = ({ children }) => {
       return (
              <React.Fragment>
                     <div className="px-4 md:px-32">
                            { children }
                     </div>
                     <Footer />
              </React.Fragment>
       )
}

export default LayoutsIndex
