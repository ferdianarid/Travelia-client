import React from 'react'

const SecondaryButton = ({ children }) => {
       return (
              <button className="bg-white hover:bg-blue-50 py-2 px-4 md:px-6 rounded-md mt-5 font-bold text-blue-600 ml-2 md:ml-4">{ children }</button>
       )
}

export default SecondaryButton
