import React from 'react'

const PrimaryButton = ( props ) => {
       return (
              <React.Fragment>
                     <button className='py-2 px-4 rounded-md bg-blue-600 border-none text-white font-medium hover:bg-blue-800 transition-all'>{ props.buttonText }</button>
              </React.Fragment>
       )
}

export default PrimaryButton
