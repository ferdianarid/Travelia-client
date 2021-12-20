import React from "react"
import Navbar from "./components/Navbar"
// import Destination from "./components/Destination";

class App extends React.Component {
    render() {
        return (
		 <React.Fragment>
			<Navbar />
			{/* <Destination heading="Bali National Beach" subheading="Lorem ipsum dolor sit ameddrea consectetur adipisicing elit." location="Bali, Indonesia" price="88500"  images="https://cdn.idntimes.com/content-images/community/2019/02/2018-02-01-39875-1517462499-large-60d97e6631e637497c2db252b926af17_600x400.jpg" />
			<Destination heading="Raja Ampat Lake" subheading="Lorem ipsum dolor sit ameddrea consectetur adipisicing elit." location="Raja Ampat, Indonesia" price="92500"  images="https://img.beritasatu.com/cache/beritasatu/910x580-2/301481430953.jpg" /> */}
		 </React.Fragment>
        )
    }
}

export default App;