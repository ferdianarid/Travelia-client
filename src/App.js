import React from "react"

// import BrowserRouter, Route and Routes
import { BrowserRouter, Route, Routes } from "react-router-dom"

// import Navbar Components
import Navbar from "../src/components/Navbar"

// import Homepage
import Homepage from "./pages/Homepage"

// import Category Pages
import Category from "./pages/Category"

// import Contact Pages
import Contact from "./pages/Contact"

// import Tickets Pages
import Tickets from "./pages/Tickets"

// import Not Found State | 404 Pages
import NotFound from "./pages/NotFound"

// import styling
import "./App.css"

const App = () => {
        return (
		<React.Fragment>
			<div className="wrapContainer">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/category" element={<Category />} />
					<Route path="/tickets" element={<Tickets />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			</div>
		</React.Fragment>
        )
}

export default App;