import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navigation.css";

const Navigation = () => {
    return ( 
        <div className="nav">
            <ul>
                <li>
                    <NavLink exact={true}
                            activeStyle={{
                                color: "#F4B824"
                            }}
                        to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{
                                color: "#F4B824"
                            }}
                     to="/rsvp">RSVP</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{
                                color: "#F4B824"
                            }}
                    to="/photos">PHOTOS</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{
                                color: "#F4B824"
                            }}
                     to="/events">DAY OF</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{
                                color: "#F4B824"
                            }}
                     to="/wedding-party">WEDDING PARTY</NavLink>
                </li>
                {/* <li>
                    <NavLink activeStyle={{
                                color: "#F4B824"
                            }}
                     to="/travel">TRAVEL</NavLink>
                </li> */}
            </ul>
        </div>
     );
}
 
export default Navigation;