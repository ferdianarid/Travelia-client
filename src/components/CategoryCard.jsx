import React from 'react'

// category card components
const CategoryCard = ( props ) => {
       const { imageUrl, category, title, subtitle, location } = props
       return (
              <React.Fragment>
                     <div className="mt-8 mx-auto w-64 md:w-52 h-96 rounded-xl relative bg-blue-100">
                            <img className='absolute object-cover h-full rounded-xl' src={imageUrl} alt="mountain" />
                            <div className="w-auto text-xs h-auto py-1 px-4 text-white font-medium absolute z-10 top-3 left-3 bg-blue-500 rounded-xl">{ category }</div>
                            <div className="banner h-auto w-full rounded-b-xl absolute bottom-0" style={blackTransparent}>
                                   <h1 className=" font-bold text-2xl px-4 pt-2 z-10 text-white">{ title }</h1>
                                   <p className=" font-normal text-xs  z-10 px-4 pb-2 text-white">{ location }</p>
                                   <p className=" font-normal text-xs  z-10 px-4 pb-14 text-white leading-normal">{ subtitle }</p>
                                   <button className="text-white text-sm z-10 font-medium py-2 px-5 absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-700 mt-10 rounded-tl-xl rounded-br-xl">See more</button>
                            </div>
                     </div>
              </React.Fragment>
       )
}

const blackTransparent = {
       backgroundColor: "rgba(0, 0, 0, .5)"
       // backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, .8), rgba(0, 0, 0, .2))"
}

export default CategoryCard
