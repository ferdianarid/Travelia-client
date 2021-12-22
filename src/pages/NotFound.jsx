import React from 'react'

// import Link react router
import { Link } from "react-router-dom"

// import Layout index
import LayoutsIndex from '../layouts'

// import primary button
import PrimaryButton from '../components/partials/PrimaryButton'

// import Heading
import Heading from "../../src/components/partials/Heading"

// import Heading
import Subheading from "../../src/components/partials/Subheading"

// Not Found pages
const NotFound = () => {
       return (
              <React.Fragment>
                     <LayoutsIndex>
                            <div className="text-center mt-28">
                                   <Heading>Pages Not Found</Heading>
                                   <Subheading>Sorry, pages not found. Please back to homepage</Subheading>
                                   <Link to="/">
                                          <PrimaryButton>Homepage</PrimaryButton>
                                   </Link>
                            </div>
                     </LayoutsIndex>
              </React.Fragment>
       )
}

export default NotFound
