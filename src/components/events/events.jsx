import React from "react";
import squiggly from "../../assets/yellow-squiggly.png";
import "./events.css";

const Events = () => {
  return (
    <div className="events">
      <h3>DAY OF</h3>
      <div className="squiggly-wrapper">
        <img src={squiggly} alt="squiggly line" />
      </div>
      <div className="event-info">
        <h4>CEREMONEY</h4>
        <p>4:30 pm, June 5, 2021</p>
        <p>Courtyard by Marriott.</p>
      </div>
      <div className="event-info">
        <h4>RECEPTION</h4>
        <p>
          We are deeply saddened at these uncertain times and unfortunately will
          not be hosting a reception. We are closely monitoring the current
          restrictions and will proceed with the best options closer to the day.
        </p>
      </div>
    </div>
  );
};

export default Events;
