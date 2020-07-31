import React from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css";

const Navigation = () => {
    return ( 
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/photos">photos</Link>
                </li>
                <li>
                    <Link to="/rsvp">rsvp</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Navigation;