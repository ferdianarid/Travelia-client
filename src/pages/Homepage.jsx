import React from 'react'

// import index layouts
import LayoutsIndex from "../layouts"

// impoer Partnership
import Partnership from '../components/Partnership'

// import banner images
import BannerImages from "../images/banner.jpg"
import DotsImage from "../images/dots.png"

// import Images
import travelOne from "../images/travel1.jpg"
import travelTwo from "../images/travel2.jpg"

// import heading and subheading
import Heading from '../components/partials/Heading'
import Subheading from '../components/partials/Subheading'

// import button primary \ secondary
import PrimaryButton from '../components/partials/PrimaryButton'
import SecondaryButton from '../components/partials/SecondaryButton'

// homepage
const Homepage = () => {
       return (
              <React.Fragment>
                     <LayoutsIndex>
                            {/* Homepage */}
                            <div className="px-4 md:px-32">
                                   {/* header section */}
                                   <div className="header flex md:flex-row flex-col justify-between relative">
                                          <div className="heading py-2 pr-1 bg-white blur-md max-w-md mt-4 md:mt-14 md:absolute md:z-10">
                                                 <p className="text-sm font-md text-blue-600 bg-blue-50 rounded-full max-w-max px-2 py-1">Travel Destination</p>
                                                 <Heading>We help you to find destination.</Heading>
                                                 <Subheading>We will provide a travel tools and help you to find a powerful and beautiful destination in indonesia.</Subheading>
                                                 {/* button call to action */}
                                                 <div className="mt-2">
                                                        <PrimaryButton>Find now</PrimaryButton>
                                                        <SecondaryButton>Guide me</SecondaryButton>
                                                 </div>
                                          </div>
                                          <div className="banner max-w-lg ml-auto mt-10">
                                                 <img src={BannerImages} alt="banner" />
                                                 <img className="absolute z-20 right-0 top-0 scale-150 hidden md:block" src={DotsImage} alt="dots" />
                                          </div>
                                   </div>
                                   {/* partnership section */}
                                   <div className="w-full my-24">
                                          <Partnership />
                                   </div>
                                   {/*  Features*/}
                                   <div className="w-full flex flex-col md:flex-row justify-between items-center">
                                          <div className="w-full md:w-1/3 mt-80 md:mt-0">
                                                 <Heading>Promo for New Year.</Heading>
                                                 <Subheading>We provide bundling promo for new traveller</Subheading>
                                          </div>
                                          <div className="w-full md:w-1/3 mt-8 md:mt-0 bg-blue-50 rounded-md p-6 mx-4">
                                                 <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                                 <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                 </svg>
                                                <p className="font-bold text-xl py-4">Verified Destination</p>
                                                <Subheading>Lorem ipsum dolor sit amet consec, adipisicing elit. Et, vitae laborum aspernatur dolor dolore eligendi</Subheading>
                                          </div>
                                          <div className="w-full md:w-1/3 mt-8 md:mt-0 bg-blue-50 rounded-md p-6">
                                                 <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-600 h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                                 <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                 <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                                 </svg>
                                                <p className="font-bold text-xl py-4">Travel Issurance</p>
                                                <Subheading>Lorem ipsum dolor sit amet consec, adipisicing elit. Et, vitae laborum aspernatur dolor dolore eligendi</Subheading>
                                          </div>
                                   </div>
                                   {/*  Preview Section*/}
                                   <div className="w-full flex flex-col md:flex-row my-24 relative">
                                          <div className="w-full  md:w-1/3 relative">
                                                 <img src={travelOne} alt="travel-one" />
                                          </div>
                                          <div className="w-96 top-10 mx-auto bg-white p-4 pl-10 pb-10 absolute z-10 left-64">
                                                 <Heading>Explore without limit.</Heading>
                                                 <Subheading>Lets explore your favourite destination. Capture and post in your social media</Subheading>
                                          </div>
                                          <div className="box bg-blue-500 w-58 p-4 h-auto absolute z-10 left-6 md:-left-20 top-6">
                                          <h1 className="font-bold text-white flex items-center justify-center">Mount Everest, Nepal</h1>
                                          </div>
                                          <div className="box w-auto p-4 bg-blue-500 h-auto absolute z-10 right-48 -bottom-6">
                                                 <h1 className="font-bold text-white flex items-center justify-center">Red Wood, California, USA</h1>
                                          </div>
                                          <div className="w-1/3 absolute right-0">
                                                 <img src={travelTwo} alt="travel-two" />
                                          </div>
                                   </div>
                            </div>
                     </LayoutsIndex>
              </React.Fragment>
       )
}

export default Homepage
