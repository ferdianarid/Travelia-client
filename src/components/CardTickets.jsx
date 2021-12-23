import React from 'react'

// import subheading
import Subheading from "../components/partials/Subheading"

// import details button
import DetailsButton from './partials/DetailsButton'

// card tickets components
const CardTickets = ( props ) => {
       const { images, title, price, description, location, grade, category, remaining } = props
       return (
              <React.Fragment>
                     <div className="w-72 md:w-64 md:mt-0 mt-10 bg-white border border-blue-50 p-4 rounded-xl h-auto relative">
                            <img className='w-full h-40 rounded-xl object-cover' src={ images } alt="travel" />
                            <div className="absolute z-10 left-6 top-6 py-1 px-3 bg-blue-600 text-white text-sm font-bold rounded-xl">{ category }</div>
                            {/* card body */}
                            <div className="py-4">
                                   <div className="flex items-center justify-between">
                                   <p className="text-md font-extrabold text-blue-600">{ title }</p>
                                   <p className="text-xl font-bold text-blue-600">{ price }</p>
                                   </div>
                                   <p className="text-xs flex items-center font-bold text-gray-800 pb-3 pt-1">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                   </svg>
                                   Location : { location }</p>
                                   <Subheading>{ description }</Subheading>
                                   <div className="flex items-center justify-between mt-5 text-blue-600">
                                          <div className="flex flex-col">
                                          <div className="flex items-center mr-6">
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                 </svg>
                                                 <p className="text-xs">{ grade }</p>
                                          </div>
                                          <div className="flex items-center mt-2">
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                 </svg>
                                                 <p className="text-xs">{ remaining }</p>
                                          </div>
                                   </div>
                                   {/* button */}
                                   <DetailsButton>View Details</DetailsButton>
                                   </div>
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default CardTickets
