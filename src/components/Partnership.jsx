import React from 'react'

// import partnership images
import facebook from  "../images/facebook.png"
import amazon from  "../images/amazon.png"
import google from "../images/google.png"
import tesla from  "../images/tesla.png"
import microsoft from  "../images/microsoft.png"

const Partnership = () => {
       return (
              <React.Fragment>
                     <div className="w-full h-24 flex justify-between">
                            <div className="w-1/5 flex items-center">
                                   <img className='w-3/4 m-auto' src={facebook} alt="facebook" />
                            </div>
                            <div className="w-1/5 flex items-center">
                                   <img className='w-3/4 m-auto' src={microsoft} alt="microsoft" />
                            </div>
                            <div className="w-1/5 flex items-center">
                                   <img className='w-3/4 m-auto' src={tesla} alt="tesla" />
                            </div>
                            <div className="w-1/5 flex items-center">
                                   <img className='w-3/4 m-auto' src={google} alt="google" />
                            </div>
                            <div className="w-1/5 flex items-center">
                                   <img className='w-3/4 m-auto' src={amazon} alt="amazon" />
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default Partnership
