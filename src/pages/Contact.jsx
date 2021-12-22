import React from 'react'

// layout index
import LayoutsIndex from "../layouts"

// import Heading and Subheading
import Heading from "../components/partials/Heading"
import Subheading from "../components/partials/Subheading"

// contact pages
const Contact = () => {
       return (
              <React.Fragment>
                     <LayoutsIndex>
                            <Heading>Contact</Heading>
                            <Subheading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum dolores impedit ex quos consequuntur quam nemo, nesciunt, asperiores ea provident enim! Vel provident soluta, tenetur aperiam corporis voluptatibus eos!</Subheading>
                     </LayoutsIndex>
              </React.Fragment>
       )
}

export default Contact
