import React, {useState, useRef} from 'react';
import axios from 'axios';
import squiggly from "../../assets/yellow-squiggly.png";
import "./rsvp.css";
import Modal from "./modal/modal"

const Rsvp = () => {

    const [guest, setGuest] = useState("");
    const [validGuest, setValidGuest] = useState(false);
    let guestNameInput = useRef();

    const findGuest = async () => {
        console.log(guestNameInput.current.value);
        const response = await axios.get(`/api/findGuest?name=${guestNameInput.current.value}`);

        if(response) {
            console.log(`successful query ${JSON.stringify(response)}`);
            if(response.data.length > 0){
                console.log("valid guest");
                setValidGuest(true);
            };
        } else {
            console.log("something went wrong");
        }
    }

    return (         
        <div className="rsvp">
            <h3>YOU'RE INVITED</h3>
            <div className="squiggly-wrapper">
                <img src={squiggly} alt="squiggly line"/>
            </div>
            <h4>ENTER THE NAME ON YOUR INVITATION</h4>
            <input className="rsvp-input" type="text" ref={guestNameInput}/>
            <button onClick={findGuest}>FIND RSVP</button>
            <Modal show={validGuest} />
        </div>
     );
}
 
export default Rsvp;