import React from 'react'
import "./alertBox.css"

const AlertBox = (props) => {

    //Add animation by useRef on element to change display and use css transitions
    //to fade message in and out
    
    const message = {
        background: props.message === "Success" ?  "#A1FC88" : "#FADBD8",
        color: props.message === "Success" ? "rgb(0, 153, 0)" : "rgb(179, 0, 0)",
        display: props.show ? "block" : "none"
      };

    return (
        <div className="alert-box" style={message}>
            {props.message}
        </div>
    )
}

export default AlertBox;