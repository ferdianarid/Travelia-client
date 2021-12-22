import React from 'react'

// import subheading
import Subheading from './partials/Subheading'

const FacilitySupport = ( props ) => {
       const { title, subtitle, images, alt } = props
       return (
              <React.Fragment>
                     <div className="w-full md:w-1/3 mt-8 md:mt-0 bg-blue-50 rounded-md p-6 ml-2">
                            <img className='text-blue-600 h-10 w-10' src={ images } alt={ alt } />
                            <p className="font-bold text-xl py-4">{ title }</p>
                            <Subheading>{ subtitle }</Subheading>
                     </div>
              </React.Fragment>
       )
}

export default FacilitySupport
