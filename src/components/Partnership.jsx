import React from 'react'

// import partnership images
import facebook from  "../images/facebook.png"
import amazon from  "../images/amazon.png"
import google from "../images/google.png"
import tesla from  "../images/tesla.png"
import microsoft from  "../images/microsoft.png"

// partnership components
const Partnership = () => {
       return (
              <React.Fragment>
                     <div className="w-full h-16 flex flex-col md:flex-row items-center justify-between">
                            <div className="w-2/3 my-6 m-auto md:w-1/5 flex items-center">
                                   <img className='w-3/4 m-auto' src={facebook} alt="facebook" />
                            </div>
                            <div className="w-2/3 my-6 m-auto md:w-1/5 flex items-center">
                                   <img className='w-3/4 m-auto' src={microsoft} alt="microsoft" />
                            </div>
                            <div className="w-2/3 my-6 m-auto md:w-1/5 flex items-center">
                                   <img className='w-3/4 m-auto' src={tesla} alt="tesla" />
                            </div>
                            <div className="w-2/3 my-6 m-auto md:w-1/5 flex items-center">
                                   <img className='w-3/4 m-auto' src={google} alt="google" />
                            </div>
                            <div className="w-2/3 my-6 m-auto md:w-1/5 flex items-center">
                                   <img className='w-3/4 m-auto' src={amazon} alt="amazon" />
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default Partnership
