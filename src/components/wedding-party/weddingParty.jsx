import React from 'react';
import "./weddingParty.css";
import korina from "../../assets/korina.jpg"
import sakina from "../../assets/sakina.jpg"
import melanie from "../../assets/melanie.jpg"
import mary from "../../assets/mary.jpg"
import anna from "../../assets/anna.jpg"
import jordan from "../../assets/jordan.png"
import phil from "../../assets/phil.jpg"
import david from "../../assets/david.jpeg"
import davidd from "../../assets/doraz.jpg"
import imran from "../../assets/imran.png"

const WeddingParty = () => {
    return ( 
        <div className="wedding-party">
            {/* <h3>WEDDING PARTY</h3> */}
            <h3>BRIDAL PARTY</h3>
            <div className="bridesmaids wp-section">
                <div className="about-me">
                    <div className="info">
                        <h4>Korina</h4>
                    </div>
                    <div className="portrait">
                        <img src={korina} alt="wedding party member" />
                    </div>
                </div>
                <div className="about-me">
                    <div className="info">
                        <h4>Sakina</h4>
                    </div>
                    <div className="portrait">
                        <img src={sakina} alt="wedding party member" />
                    </div>
                </div>
                <div className="about-me">
                    <div className="info">
                        <h4>Melanie</h4>
                    </div>
                    <div className="portrait">
                        <img src={melanie} alt="wedding party member" />
                    </div>
                </div>
                <div className="about-me">
                    <div className="info">
                        <h4>Mary</h4>
                    </div>
                    <div className="portrait">
                        <img src={mary} alt="wedding party member" />
                    </div>
                </div>
                <div className="about-me">
                    <div className="info">
                        <h4>Anna</h4>
                    </div>
                    <div className="portrait">
                        <img src={anna} alt="wedding party member" />
                    </div>
                </div>
            </div>

            <h3>GROOMSMEN</h3>
            <div className="groomsmen wp-section">
                <div className="about-me">
                    <div className="info">
                        <h4>Jordan</h4>
                    </div>
                    <div className="portrait">
                        <img src={jordan} alt="wedding party member" />
                    </div>
                </div>
                <div className="about-me">
                    <div className="info">
                        <h4>Phil</h4>
                    </div>
                    <div className="portrait">
                        <img src={phil} className="phil" alt="wedding party member" />
                    </div>
                </div>
                <div className="about-me">
                    <div className="info">
                        <h4>David B</h4>
                    </div>
                    <div className="portrait">
                        <img src={david} alt="wedding party member" />
                    </div>
                </div>
                <div className="about-me">
                    <div className="info">
                        <h4>Imran</h4>
                    </div>
                    <div className="portrait">
                        <img className="imran" src={imran} alt="wedding party member" />
                    </div>
                </div>
                <div className="about-me">
                    <div className="info">
                        <h4>David D</h4>
                    </div>
                    <div className="portrait">
                        <img src={davidd} alt="wedding party member" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default WeddingParty;