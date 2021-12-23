import React from 'react'

// import Layout Index
import LayoutsIndex from '../layouts'

// import Heading and Subheading
import Heading from '../components/partials/Heading'
import Subheading from '../components/partials/Subheading'

const Tickets = () => {
       const categories = [{
              id: 1,
              url: `https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80`,
              title: "Forest",
              category: "Forest",
              subtitle: "Lorem ipsum dolor site amet.",
              location: "Nevada USA"
          },
          {
              id: 2,
              url: `https://images.unsplash.com/photo-1481047874621-0ed2ab52598e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
              title: "Waterfall",
              category: "Waterfall",
              subtitle: "Lorem ipsum dolor site amet.",
              location: "Florida USA"
          },
          {
              id: 3,
              url: `https://images.unsplash.com/photo-1639909280895-9c84d26d917e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60`,
              title: "Dessert",
              category: "Dessert",
              subtitle: "Lorem ipsum dolor site amet.",
              location: "Sahara Africa"
          },
          {
              id: 4,
              url: `https://images.unsplash.com/photo-1639760181882-63c4e9d703db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60`,
              title: "Mountain",
              category: "Mountain",
              subtitle: "Lorem ipsum dolor site amet.",
              location: "Australia"
          }
      ]
       return (
              <React.Fragment>
                     <LayoutsIndex>
                            <Heading>Yeaey, you have a tickets</Heading>
                            <Subheading>Lets enjoy the holiday vacations</Subheading>
                            {/* Card */}
                            <div className="w-full bg-blue-50 rounded-xl h-auto mt-10 flex">
                                   <img className='w-40 object-cover h-auto rounded-l-xl' src={categories[1].url} alt="image" />
                                   <div className="p-4 pl-8">
                                          <p className="text-xs text-white font-medium py-1 px-3 w-16 rounded-full bg-blue-500">Forest</p>
                                          <h1 className="text-2xl font-bold pt-2">Nevada Hills Mountain</h1>
                                          <div className="flex pt-2">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-yellow-400 w-5" viewBox="0 0 20 20" fill="currentColor">
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-yellow-400 w-5" viewBox="0 0 20 20" fill="currentColor">
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-yellow-400 w-5" viewBox="0 0 20 20" fill="currentColor">
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-yellow-400 w-5" viewBox="0 0 20 20" fill="currentColor">
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-yellow-400 w-5" viewBox="0 0 20 20" fill="currentColor">
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                          {/*  */}
                                          <div className="text-sm font-bold ml-4">5.0 / 5.0</div>
                                          </div>
                                          <p className="text-sm font-normal pt-2">Los Angeles, USA</p>
                                          <p className="text-sm text-gray-500 font-normal pt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, quae.</p>
                                   </div>
                                   <div className="flex items-center justify-center ml-16">
                                   <img className='w-28 h-28' src="https://upload.wikimedia.org/wikipedia/commons/6/65/QR_code_for_QRpedia.png" alt="qrcode" />
                                   </div>
                            </div>
                     </LayoutsIndex>
              </React.Fragment>
       )
}

export default Tickets
