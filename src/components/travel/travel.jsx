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
            <h4>HOTEL TORONTO</h4>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum dolor.</p>
            <a>VISIT WEBSITE</a>
        </div>
     );
}
 
export default Travel;