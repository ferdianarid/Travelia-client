import React from 'react'

// Primary Button Component
const PrimaryButton = ( props ) => {
       return (
              <React.Fragment>
                     <button onClick={props.onClick} className='py-2 w-full px-4 rounded-md bg-gradient-to-r from-green-400 to-blue-500 border-none text-white font-medium hover:bg-blue-800 transition-all'>{ props.buttonText }</button>
              </React.Fragment>
       )
}

export default PrimaryButton
