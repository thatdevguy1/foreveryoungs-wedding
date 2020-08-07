import React from 'react';
import squiggly from "../../assets/yellow-squiggly.png";
import "./rsvp.css";

const Rsvp = () => {

    return (         
        <div className="rsvp">
            <h3>YOU'RE INVITED</h3>
            <div className="squiggly-wrapper">
                <img src={squiggly} alt="squiggly line"/>
            </div>
            <h4>ENTER THE NAME ON YOUR INVITATION</h4>
            <input className="rsvp-input" type="text" />
            <button>FIND RSVP</button>
        </div>
     );
}
 
export default Rsvp;