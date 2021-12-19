import React from 'react'

// import Primary Button
import PrimaryButton from "./partials/PrimaryButton"

class Destination extends React.Component {
       constructor(props) {
              super(props)
              this.state = {
                     images: this.props.images,
                     heading: this.props.heading,
                     subheading: this.props.subheading,
                     price: this.props.price,
                     location: this.props.location
              }
       }
       render() {
              return (
                     <React.Fragment>
                            <div className="max-w-xs bg-blue-50 rounded-md border border-gray-200">
                                   <img className='rounded-t-lg' src={this.props.images} alt="bali" />
                                   <div className="heading p-5">
                                          <h1 className='text-xl font-bold text-gray-800'>{this.props.heading}</h1>
                                          <p className="py-2 font-medium text-gray-900 text-sm">{this.props.location}</p>
                                          <p className='text-md text-gray-600 leading-relaxed mb-4'>{this.props.subheading}</p>
                                          <PrimaryButton buttonText="Select Destination" />
                                   </div>
                            </div>
                     </React.Fragment>
              )
       }
}

export default Destination
