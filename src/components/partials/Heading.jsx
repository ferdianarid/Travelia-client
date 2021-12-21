import React from 'react'

const Heading = ({ children }) => {
       return (
              <h1 className='text-4xl md:text-5xl font-extrabold md:leading-tight text-700 my-4 md:pr-0 pr-2'>{ children }</h1>
       )
}

export default Heading
