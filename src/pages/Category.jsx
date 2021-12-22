import React from 'react'

// import index layouts
import LayoutsIndex from "../layouts"

// import heading and subheading
import Heading from '../components/partials/Heading'
import Subheading from '../components/partials/Subheading'

// Category
const Category = () => {
       return (
              <React.Fragment>
                     <LayoutsIndex>
                            <Heading>Category Pages</Heading>
                            <Subheading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusantium tempora eum quo nemo laborum ipsum harum quis qui officiis perspiciatis culpa, id animi fugit in amet aperiam consequuntur recusandae.</Subheading>
                     </LayoutsIndex>
              </React.Fragment>
       )
}

export default Category
