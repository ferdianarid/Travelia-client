import React from 'react'

// import index layouts
import LayoutsIndex from "../layouts"

// import heading and subheading
import Heading from '../components/partials/Heading'
import Subheading from '../components/partials/Subheading'

import ListCategory from '../components/containers/ListCategory'

// Category
const Category = () => {
       return (
              <React.Fragment>
                     <LayoutsIndex>
                            <Heading>Destination Category.</Heading>
                            <Subheading>Choose categories and find your specific destination</Subheading>
                            {/* Card */}
                            <ListCategory />
                     </LayoutsIndex>
              </React.Fragment>
       )
}

export default Category
