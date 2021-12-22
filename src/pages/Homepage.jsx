import React from 'react'

// import index layouts
import LayoutsIndex from "../layouts"

// impoer Partnership
import Partnership from '../components/Partnership'

// import Card Tickets
import CardTickets from "../components/CardTickets"

// import details button
import DetailsButton from "../components/partials/DetailsButton"

// import facility components
import FacilitySupport from "../components/FacilitySupport"

// import banner images
import BannerImages from "../images/banner.jpg"
import DotsImage from "../images/dots.png"

// import Images
import travelOne from "../images/travel1.jpg"
import travelTwo from "../images/travel2.jpg"
import familyOne from "../images/family.jpg"
import familyTwo from "../images/family2.jpg"

// import heading and subheading
import Heading from '../components/partials/Heading'
import Subheading from '../components/partials/Subheading'

// import button primary \ secondary
import PrimaryButton from '../components/partials/PrimaryButton'
import SecondaryButton from '../components/partials/SecondaryButton'

// import Recent Tabs
import RecentTabs from '../components/RecentTabs'

// import images
import verified from "../images/verified.svg"
import insurance from "../images/insurance.svg"

// homepage
const Homepage = () => {
       const items = [{
              images: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
              title: "Florida Beach",
              subtitle: "Florida beach is beach who located in los angeles usa",
              category: "Beach",
              price: "$200",
              location: "Los Angeles",
              grade: "Expensive",
              remaining: "5 Remaining"
          },
          {
              images: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
              title: "Nevada Beach",
              subtitle: "Nevada beach is beach who located in los angeles usa",
              category: "Beach",
              price: "$250",
              location: "Nevada City",
              grade: "Expensive",
              remaining: "7 Remaining"
          }]
       return (
              <React.Fragment>
                     <LayoutsIndex>
                            {/* header section */}
                            <div className="header flex md:flex-row flex-col justify-between relative">
                                   <div className="heading py-2 pr-1 bg-white blur-md max-w-md mt-4 md:mt-14 md:absolute md:z-10">
                                          <p className="text-sm font-md text-blue-600 bg-blue-50 rounded-full max-w-max px-2 py-1">Travel Destination</p>
                                          <Heading>We help you to find destination.</Heading>
                                          <Subheading>We will provide a travel tools and help you to find a powerful and beautiful destination in indonesia.</Subheading>
                                          {/* button call to action */}
                                          <div className="mt-2">
                                                 <PrimaryButton>Get the ticket</PrimaryButton>
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
                                          <Heading>Facility will you get.</Heading>
                                          <Subheading>We always prioritize and support visitor with any facilitation</Subheading>
                                   </div>
                                   {/* facility components */}
                                   <FacilitySupport title="Verified Destination" images={verified} alt="verified" subtitle="Lorem ipsum dolor sit amet consec, adipisicing elit. Et, vitae laborum aspernatur dolor dolore eligendi" />
                                   <FacilitySupport title="Travel Issurance" images={insurance} alt="insurance" subtitle="Lorem ipsum dolor sit amet consec, adipisicing elit. Et, vitae laborum aspernatur dolor dolore eligendi" />
                            </div>
                            {/*  Preview Section*/}
                            <div className="w-full flex flex-col md:flex-row my-24 relative">
                                   <div className="w-full  md:w-1/3 relative">
                                          <img src={travelOne} alt="travel-one" />
                                   </div>
                                   <div className="md:w-96 w-80 md: top-10 mx-auto bg-white p-4 pl-10 pb-10 absolute z-10 left-4 md:left-64 mt-80 md:mt-0 bg-opacity-90 md:bg-opacity-100">
                                          <Heading>Explore without limit.</Heading>
                                          <Subheading>Lets explore your favourite destination. Capture and post in your social media</Subheading>
                                   </div>
                                   <div className="box bg-blue-500 w-58 p-4 h-auto absolute z-10 left-6 md:-left-20 top-6">
                                   <h1 className="font-bold text-white flex items-center justify-center">Mount Everest, Nepal</h1>
                                   </div>
                                   <div className="box w-3/4 md:w-auto p-4 bg-blue-500 h-auto absolute z-10 md:right-56 right-12 bottom-6 md:-bottom-12">
                                          <h1 className="font-bold text-white flex items-center justify-center">Red Wood, California, USA</h1>
                                   </div>
                                   <div className="w-full md:w-1/3 md:absolute right-0 block mt-12 md:mt-0">
                                          <img src={travelTwo} alt="travel-two" />
                                   </div>
                            </div>
                            {/* Section */}
                            <div className="mb-24 md:mt-36 flex flex-col md:flex-row justify-between relative">
                                   <div className="w-full md:w-1/2">
                                          <Heading>Make Quality Time with Family.</Heading>
                                          <Subheading>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et non tempora natus voluptas aspernatur fugiat quaerat! Incidunt dolorem culpa nostrum sint repudiandae</Subheading>
                                   </div>
                                   <div className="w-full md:w-1/2 mt-10">
                                          <img className="w-full md:w-96 block md:absolute right-0" src={familyOne} alt="family" />
                                   </div>
                                   <img className="w-full md:w-96 h-auto block md:absolute left-0 mt-4 md:mt-64" src={familyTwo} alt="family-two" />
                                   <div className="box hidden md:block w-96 h-auto absolute z-10 right-0 mt-96">
                                   <Subheading>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et non tempora natus voluptas aspernatur fugiat quaerat! Incidunt dolorem culpa nostrum sint repudiandae</Subheading>
                                   </div>
                            </div>
                            {/* Frequently Asked Question */}
                            <div className="w-full flex flex-col md:flex-row mb-10 mt-24 md:mt-96">
                                   <div className="w-full md:w-1/2 mt-0 md:mt-10">
                                          <Heading>Frequently Asked Question.</Heading>
                                          <Subheading>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ea ipsam itaque nam perspiciatis nobis repellendus fuga rem veniam dolorum?</Subheading>
                                   </div>
                                   <div className="w-full md:w-1/2 md:pl-10">
                                          <RecentTabs />
                                   </div>
                            </div>
                            {/* Card Destination */}
                            <div className="w-full">
                                   <Heading>Grab your ticket now.</Heading>
                                   <Subheading>Lets grab fast your vacation ticket and enjoy your holiday with family</Subheading>
                            </div>
                            <div className="w-full mt-10 md:mt-14 mb-14 flex flex-col md:flex-row justify-between items-center">
                                   {/* Card */}
                                   <div className="w-72 md:w-64 bg-white shadow-2xl p-4 rounded-xl h-auto relative">
                                          <img className='w-full h-40 rounded-xl object-cover' src={travelOne} alt="travel" />
                                          <div className="absolute z-10 left-6 top-6 py-1 px-3 bg-blue-600 text-white text-sm font-bold rounded-xl">Mountain</div>
                                          {/* card body */}
                                          <div className="py-4">
                                                 <div className="flex items-center justify-between">
                                                 <p className="text-md font-extrabold text-blue-600">Mount Everest</p>
                                                 <p className="text-xl font-bold text-blue-600">$355</p>
                                                 </div>
                                                 <p className="text-xs flex items-center font-bold text-gray-800 pb-3 pt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                 </svg>
                                                 Location : Everest Nepal</p>
                                                 <Subheading>Lorem ipsum dolor sit amet amet consectetur adipisicing elit nika.</Subheading>
                                                 <div className="flex items-center justify-between mt-5 text-blue-600">
                                                        <div className="flex flex-col">
                                                        <div className="flex items-center mr-6">
                                                               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                               </svg>
                                                               <p className="text-xs">Expensive</p>
                                                        </div>
                                                        <div className="flex items-center mt-2">
                                                               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                               </svg>
                                                               <p className="text-xs">8 Remaining</p>
                                                        </div>
                                                        </div>
                                                 {/* button */}
                                                 <DetailsButton>View Details</DetailsButton>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* Card */}
                                   {
                                          items.map(destinate => (
                                                 <CardTickets images={destinate.images} title={destinate.title} category={destinate.category} price={destinate.price} description={destinate.subtitle} remaining={destinate.remaining} grade={destinate.grade} location={destinate.location}  />
                                          ))
                                   }
                            </div>
                            <div className="w-full mx-auto mt-4 text-center">
                                   <DetailsButton>Show more</DetailsButton>
                            </div>
                     </LayoutsIndex>
              </React.Fragment>
       )
}

export default Homepage
