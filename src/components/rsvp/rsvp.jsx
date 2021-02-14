import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import squiggly from "../../assets/yellow-squiggly.png";
import "./rsvp.css";
import Modal from "./modal/modal";
import AlertBox from "./alert-box/alertBox";

const Rsvp = () => {
  useEffect(() => {
    console.log("rsvp rendered");
  }, []);
  const [guest, setGuest] = useState([]);
  const [successMsg, setSuccessMsg] = useState(false);

  //******change state variable names
  const [validGuest, setValidGuest] = useState(false);
  let guestNameInput = useRef();
  let alertMessage = useRef();

  const findGuest = async () => {
    const response = await axios.get(
      `/api/findGuest?name=${guestNameInput.current.value}`
    );

    if (response) {
      setValidGuest(true);
      if (response.data.length > 0) {
        console.log("valid guest");
        //Give response data name to Modal to display
        setGuest(response.data);
      } else {
        //Give modal some indicator that no one was found in the database with that name
        setGuest([]);
      }
    } else {
      console.log("something went wrong");
    }
  };

  const handleInputKeyPress = (event) => {
    if (event.keyCode === 13) {
      findGuest();
    }
    return;
  };

  const handleConfirm = async (guestRsvp) => {
    //send a post to the server with information on the guests RSVP which in turn will be saved to the database
    //Create a loop to build the payload that consists of a single object that holds an array of objects
    const payload = {
      guests: guestRsvp,
    };

    setValidGuest(false);

    try {
      await axios.post("/api/setReservation", payload);
      alertMessage.current = "Success";
    } catch (err) {
      //set message to tell user rsvp didnt work
      alertMessage.current = "Failed";
    }

    if (guestRsvp.length > 0) {
      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
      }, 6000);
    }
  };

  return (
    <div className="rsvp">
      <h3>RSVP</h3>
      <div className="squiggly-wrapper">
        <img src={squiggly} alt="squiggly line" />
      </div>
      <p>
        We appreciate everyone who have confirmed attendance to join us on our
        special day. However due to the continuously evolving s ituation, we may
        have to limit our guest count based on the current gathering
        restrictions.
      </p>
      <p>For thos ewho cannot attend place celebrate with us virtually:</p>
      <h4>ENTER THE NAME ON YOUR INVITATION</h4>
      <input
        className="rsvp-input"
        type="text"
        ref={guestNameInput}
        onKeyDown={handleInputKeyPress}
      />
      <button onClick={findGuest}>FIND RSVP</button>
      <Modal
        show={validGuest}
        handleFunc={handleConfirm}
        rsvpResponse={guest}
      />
      <AlertBox show={successMsg} message={alertMessage.current} />
    </div>
  );
};

export default Rsvp;
