import React from 'react'

// import react toastify
import { ToastContainer, toast } from "react-toastify"

// import react toastofy css
import "react-toastify/dist/ReactToastify.css"

// import Primary Button
import PrimaryButton from "./partials/PrimaryButton"

// statefull component destinatino
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
       // toast notif message
       notification = () => toast("Succesfully Booking")
       render() {
              return (
                     <React.Fragment>
                            <div className="w-60 bg-blue-50 rounded-md border border-gray-200">
                                   <img className='rounded-t-lg h-40 w-full object-cover' src={this.props.images} alt="bali" />
                                   <div className="heading p-5">
                                          <h1 className='text-xl font-bold text-gray-800'>{this.props.heading}</h1>
                                          <p className="py-2 font-medium text-gray-900 text-sm">{this.props.location}</p>
                                          <p className='text-sm text-gray-600 leading-relaxed mb-4'>{this.props.subheading}</p>
                                          <PrimaryButton onClick={this.notification} buttonText="Select Destination" />
                                          {/* Toast Config */}
                                          <ToastContainer
                                                 position="top-center"
                                                 autoClose={1000}
                                                 hideProgressBar={false}
                                                 newestOnTop={false}
                                                 closeOnClick
                                                 rtl={false}
                                                 pauseOnFocusLoss
                                                 draggable
                                                 pauseOnHover
                                          />
                                   </div>
                            </div>
                     </React.Fragment>
              )
       }
}

export default Destination
