import React from 'react'

// Primary Button Component
const PrimaryButton = ( props ) => {
       const { children } = props
       return (
              <React.Fragment>
                     <button className="bg-blue-600 hover:bg-blue-800 py-2 px-4 md:px-6 rounded-md mt-5 font-bold text-white">{ children }</button>
              </React.Fragment>
       )
}

export default PrimaryButton
