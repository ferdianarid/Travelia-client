import React from 'react'

const DetailsButton = ( props ) => {
       const { children } = props
       return (
              <button className="rounded-full bg-blue-600 hover:bg-blue-800 px-5 py-3 border-none text-white text-xs font-bold">{ children }</button>
       )
}

export default DetailsButton
