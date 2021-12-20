import React from 'react'
import LayoutsIndex from "../layouts"

import BannerImages from "../images/banner.jpg"

const Homepage = () => {
       return (
              <React.Fragment>
                     <LayoutsIndex>
                            <div className="px-4 md:px-32">
                                   <div className="header flex justify-between relative">
                                          <div className="heading py-5 pr-1 bg-white blur-md max-w-md mt-12 absolute z-10">
                                                 <p className="text-sm font-md text-blue-600 bg-blue-50 rounded-full max-w-max px-2 py-1">Travel Destination</p>
                                                 <h1 className='text-5xl font-extrabold leading-tight text-700 my-2'>We help you to find destination.</h1>
                                                 <p className="text-m text-gray-700 leading-normal">
                                                        We will provide a travel tools and help you to find a powerful and beautiful destination in indonesia.
                                                 </p>
                                                 {/* button call to action */}
                                                 <div className="mt-3">
                                                        <button className="bg-blue-600 hover:bg-blue-800 py-2 px-6 rounded-md mt-5 font-bold text-white">Find now</button>
                                                        <button className="bg-white hover:bg-blue-50 py-2 px-6 rounded-md border border-blue-100 mt-5 font-bold text-blue-600 ml-4">Guide me</button>
                                                 </div>
                                          </div>
                                          <div className="banner max-w-lg ml-auto mt-10">
                                                 <img src={BannerImages} alt="banner" />
                                          </div>
                                   </div>
                            </div>
                     </LayoutsIndex>
              </React.Fragment>
       )
}

export default Homepage
