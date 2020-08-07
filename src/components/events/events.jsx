import React from 'react';
import squiggly from "../../assets/yellow-squiggly.png";
import "./events.css";

const Events = () => {
    return ( 
        <div className="events">
            <h3>EVENTS</h3>
            <div className="squiggly-wrapper">
                <img src={squiggly} alt="squiggly line"/>
            </div>
            <div className="event-info">
                <h4>WEDDING CEREMONEY</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="event-info">
                <h4>RECEPTION</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum</p>
            </div>
        </div>
     );
}
 
export default Events;