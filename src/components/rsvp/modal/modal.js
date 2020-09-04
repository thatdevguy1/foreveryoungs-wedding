import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import "./modal.css";

const Modal = (props) => {

    const formRef = useRef(null);

    //possibly useRef to keep the modal state from changing twice on btn click
    let [displayToggle, setDisplayToggle] = useState("none");
    let [message, setMessage] = useState("");

    let modalStyling = {
        display: displayToggle
    };

    //ISSUE props.show after getting set to true never changes back to false.
    useEffect(()=>{

        props.show ? setDisplayToggle("block") : setDisplayToggle("none");

    }, [props.show]);

    const createGuestList = () => {
        let guestMarkdown = null;
        if(props.rsvpResponse.length > 0){
            guestMarkdown = props.rsvpResponse.map((guest, index) => {
               return ( <div className="guest-row">
                            <div className="guest-name-wrap">{guest.name}</div>
                            <div className="guest-options-wrap">
                                <div id="first-option" className="input-wrap">
                                    <input type="radio" className="guest-options" name={"rsvpOption-" + index} value={true} />Confirm
                                </div>
                                <div className="input-wrap">
                                    <input type="radio" className="guest-options" name={"rsvpOption-" + index} value={false} />Regretfully Decline
                                </div>
                            </div>
                        </div> )
            });
        } else {
            return ( <div className="guest-row">
                        <div className="guest-name-wrap"><span>No guest found</span></div>
                        <div className="guest-options-wrap">
                        </div>
                    </div> )
        }

        console.log(`guest info here: ${guestMarkdown}`);

        return guestMarkdown;
    };

    const formHandler = (event) => {
        event.preventDefault();
        const guestRsvp = [];
        let success = true;

        props.rsvpResponse.forEach((guest, index) => {
            if(formRef.current.elements[`rsvpOption-${index}`].value === ""){
                //trigger message to select an option
                setMessage("Please choose an option");
                success = false;
            };

            guestRsvp.push({
                name: guest.name,
                attending: formRef.current.elements[`rsvpOption-${index}`].value
            });
        });
        if(success=== true){
            setMessage("");
            props.handleFunc(guestRsvp);
        }
    }


    return (         
        <div className="modal" style={modalStyling}>
            <form className="modal-core" onSubmit={formHandler} ref={formRef}>
                <span id="err-msg">{message}</span>
                {createGuestList()}
                <button className="confirm-btn" type="submit">Continue</button>
            </form>
        </div>
     );
}
 
export default Modal;