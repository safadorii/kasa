import React from "react";
import Navbar from '../composants/home/Navbar'
import Banner from '../composants/home/banner'
import Footer from '../composants/home/Footer'
import DisplayCards from "../composants/home/displaycard"
import "../pages/Home.scss"
function Home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <DisplayCards />
        <Footer />
        
        
    </div>
  );
}

export default Home;