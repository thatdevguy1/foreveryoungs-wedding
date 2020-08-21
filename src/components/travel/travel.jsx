import React from 'react';
import squiggly from "../../assets/yellow-squiggly.png";
import "./travel.css";

const Travel = () => {
    return ( 
        <div className="travel">
            <h3>TRAVEL</h3>
            <div className="squiggly-wrapper">
                <img src={squiggly} alt="squiggly line"/>
            </div>
            <h4 className="hotel-name">HOTEL TORONTO</h4>
            <span>Ask about our group rate.</span>
            <p>Lorem ipsum dolor sit.
               Lorem, ipsum dolor. 
            </p>
            <a className="visit-link">VISIT WEBSITE</a>
        </div>
     );
}
 
export default Travel;