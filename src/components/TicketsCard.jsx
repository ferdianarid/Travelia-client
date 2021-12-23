import React from 'react'

const TicketsCard = () => {
       return (
              <React.Fragment>
                     <div className="w-full bg-blue-50 rounded-xl h-auto mt-10 flex">
                                   <img className='w-40 object-cover h-auto rounded-l-xl' src={ imgUrl } alt="image" />
                                   <div className="p-4 pl-8">
                                          <p className="text-xs text-white font-medium py-1 px-3 w-16 rounded-full bg-blue-500">{ category }</p>
                                          <h1 className="text-2xl font-bold pt-2">{ title }</h1>
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
                                          <p className="text-sm font-normal pt-2">{ location }</p>
                                          <p className="text-sm text-gray-500 font-normal pt-2">{ subtitle }</p>
                                   </div>
                                   <div className="flex items-center justify-center ml-16">
                                   <img className='w-28 h-28' src="https://upload.wikimedia.org/wikipedia/commons/6/65/QR_code_for_QRpedia.png" alt="qrcode" />
                                   </div>
                            </div>
              </React.Fragment>
       )
}

export default TicketsCard
