import React from 'react';
import "./home.css"
import hero from "../../assets/hero.jpg";

const Home = () => {
    const heroStyling = {
        backgroundImage: `url(${hero})`,
        backgroundPosition: "50% 80%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return ( 
        <div classname="Home">
            <div className="hero-img shadow" style={heroStyling}>
            </div>
            <h3 className="header italic">Please join us for our wedding celebration on</h3>
            <h3 className="header primary-text">JUNE 15, 2021</h3>
        </div>
     );
}
 
export default Home;