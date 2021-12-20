import React, { useState } from "react";
import { Transition } from "@headlessui/react";

// import logo
import traveliaLogo from "../images/travelia.png"

// import Facility Navigation
import Facility from "./Facility"

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className="bg-transparent">
				<div className="py-8 px-4 md:px-32">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<img src={traveliaLogo} width="128px" alt="travelia-logo" />
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<a href="#" alt="link" className=" text-blue-600 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-xl text-sm font-medium">
										Dashboard
									</a>
									<a href="#" alt="link" className="text-blue-600 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-xl text-sm font-medium">
										Projects
									</a>
                                                               <Facility />
									<a href="#" alt="link" className="text-blue-600 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-xl text-sm font-medium">Category
									</a>
									<a href="#" alt="link" className="text-blue-600 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-xl text-sm font-medium">
										Contact
									</a>
								</div>
							</div>
						</div>
						<div className="-mr-2 flex md:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-white inline-flex items-center justify-center p-2 rounded-md text-blue-800 hover:text-white hover:bg-blue-800 focus:outline-none "
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
								<a
									href="#"
									className="hover:bg-blue-800 text-sm text-blue-600 hover:text-white block px-3 py-2 rounded-md font-medium"
								>
									Dashboard
								</a>

								<a
									href="#"
									className="text-blue-600 text-sm hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md font-medium"
								>
									Projects
								</a>

								<Facility />

								<a
									href="#"
									className="text-blue-600 text-sm hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md font-medium"
								>
									Contact
								</a>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;