import React from 'react'

// import Images
import TraveliaLogo from "../images/travelia.png"

const Footer = () => {
       return (
              <React.Fragment>
                     {/* Footer Section */}
                     <div className="w-full h-auto bg-blue-500 mt-24">
                            <div className="px-4 md:px-32 py-4 md:py-10 flex flex-col-reverse">
                                   <div className="text-center flex items-center flex-col mt-12">
                                          <img className='w-32 h-auto' src={TraveliaLogo} alt="travelia" />
                                          <h1 className="text-white font-bold text-center text-lg mt-4">Grab Fast and Enjoy Vacation</h1>
                                          <h1 className="text-white font-normal text-center text-xs mt-4">&copy; Travelia Digital. All Right Reserved.</h1>
                                   </div>
                                   <div className="flex flex-col md:flex-row justify-between items-center">
                                   <div className="w-full text-center mt-8 md:mt-0 md:text-left md:w-1/4">
                                          <h1 className="font-bold text-sm text-white">Discovery</h1>
                                          <p className="text-sm font-normal text-white pt-3">Ticketing</p>
                                          <p className="text-sm font-normal text-white pt-3">Ordering</p>
                                          <p className="text-sm font-normal text-white pt-3">Showcase</p>
                                          <p className="text-sm font-normal text-white pt-3">Information</p>
                                   </div>
                                   <div className="w-full text-center mt-8 md:mt-0 md:text-left md:w-1/4">
                                          <h1 className="font-bold text-sm text-white">Features</h1>
                                          <p className="text-sm font-normal text-white pt-3">Insurance</p>
                                          <p className="text-sm font-normal text-white pt-3">Guarantee</p>
                                          <p className="text-sm font-normal text-white pt-3">Facilitation</p>
                                          <p className="text-sm font-normal text-white pt-3">Special Price</p>
                                   </div>
                                   <div className="w-full text-center mt-8 md:mt-0 md:text-left md:w-1/4">
                                          <h1 className="font-bold text-sm text-white">Main Menu</h1>
                                          <p className="text-sm font-normal text-white pt-3">Product</p>
                                          <p className="text-sm font-normal text-white pt-3">Category</p>
                                          <p className="text-sm font-normal text-white pt-3">Facilitation</p>
                                          <p className="text-sm font-normal text-white pt-3">About Us</p>
                                   </div>
                                   <div className="w-full text-center mt-8 md:mt-0 md:text-left md:w-1/4">
                                          <h1 className="font-bold text-sm text-white">Social Media</h1>
                                          <p className="text-sm font-normal text-white pt-3">Linkedin</p>
                                          <p className="text-sm font-normal text-white pt-3">Facebook</p>
                                          <p className="text-sm font-normal text-white pt-3">Instagram</p>
                                          <p className="text-sm font-normal text-white pt-3">Discord</p>
                                   </div>
                                   </div>
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default Footer
