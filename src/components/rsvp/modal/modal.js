import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import "./modal.css";

const Modal = (props) => {

    let [displayToggle, setDisplayToggle] = useState("none");

    let modalStyling = {
        display: displayToggle
    };

    useEffect(()=>{
        if(props.show){
            setDisplayToggle("block");
        }
    }, [props.show]);

    return (         
        <div className="modal" style={modalStyling}>
            <div className="modal-core">
                <div className="guest-row">
                    <div className="guest-name-wrap">David Bland</div>
                    <div className="guest-options-wrap">
                        <div id="first-option" className="input-wrap">
                            <input type="radio" className="guest-options" name="rsvpOption" value="confirm" />Confirm
                        </div>
                        <div className="input-wrap">
                            <input type="radio" className="guest-options" name="rsvpOption" value="decline" />Regretfully Decline
                        </div>
                    </div>
                </div>
                <button className="confirm-btn">Continue</button>
            </div>
        </div>
     );
}
 
export default Modal;