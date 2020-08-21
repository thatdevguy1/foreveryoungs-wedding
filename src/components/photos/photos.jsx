import React from 'react';
import squiggly from "../../assets/yellow-squiggly.png";
import "./photos.css";
import pic1 from "../../assets/picture1.jpg";
import pic2 from "../../assets/picture2.jpg";
import pic3 from "../../assets/picture3.jpg";
import pic4 from "../../assets/picture4.jpg";
import pic5 from "../../assets/picture5.jpg";
import pic6 from "../../assets/picture6.jpg";

const Photos = () => {

    const pictures = [pic1, pic2, pic3, pic4, pic5, pic6];
    
    const backgroundSetter = (picNum) => {
        
        return {
            backgroundImage: `url(${pictures[picNum]})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        };
    };

    return ( 
        <div className="photos">
            <h3>PHOTOS</h3>
            <div className="squiggly-wrapper">
                <img src={squiggly} alt="squiggly line"/>
            </div>
            <div className="gallery">
                <div className="pic tall" style={backgroundSetter(1)}></div>
                <div className="pic" style={backgroundSetter(4)}></div>
                <div className="pic taller" style={backgroundSetter(3)}></div>
                <div className="pic" style={backgroundSetter(2)}></div>
                <div className="pic tall" style={backgroundSetter(5)}></div>
                <div className="pic taller" style={backgroundSetter(0)}></div>
            </div>
        </div>
     );
}
 
export default Photos;