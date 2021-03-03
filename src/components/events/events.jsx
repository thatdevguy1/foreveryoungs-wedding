import React from "react";
import squiggly from "../../assets/yellow-squiggly.png";
import "./events.css";
import dayofImg from "../../assets/dayof.jpg"

const Events = () => {
  return (
    <div className="events">
      <h3>DAY OF</h3>
      <div className="event-info">
        <p>J U N E 5, &nbsp; 2 0 2 1&nbsp; a t&nbsp; 1 0 : 3 0 a m</p>
        <p>P A L E T T A&nbsp; M A N S I O N</p>
        <p>
          4250 Lakeshore Blvd. <br/> 
          Burlington, ON, L7L 1A6
        </p>
        <div className="squiggly-wrapper">
        <img src={dayofImg} alt="squiggly line" />
      </div>
      </div>
      <div className="event-info">
        <h4>RECEPTION</h4>
        <p>
          We are deeply saddened at these uncertain times and unfortunately will
          not be hosting a reception. <br/> We are closely monitoring the current
          restrictions and will proceed with the best options closer to the day.
        </p>
      </div>
    </div>
  );
};

export default Events;
