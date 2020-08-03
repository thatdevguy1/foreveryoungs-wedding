import React from 'react';
import "./home.css"
import hero from "../../assets/hero.jpg";

const Home = () => {
    const heroStyling = {
        backgroundImage: `url(${hero})`,
        backgroundPosition: "50% 80%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return ( 
        <div classname="Home">
            <div className="hero-img shadow" style={heroStyling}>
            </div>
            <h3 className="header italic">Please join us for our wedding celebration on</h3>
            <h3 className="header primary-text">AUGUST 24, 2023</h3>
            <div className="story-section">
                <h3 className="primary-text header">OUR STORY</h3>
                <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas obcaecati vero saepe dolore 
                    porro consequuntur nulla laborum, exercitationem delectus distinctio dolor perferendis facere 
                    natus eum aspernatur, voluptas a. Asperiores tempore earum, autem, aliquid soluta tenetur totam 
                    facilis accusamus officiis beatae eveniet aliquam atque illo veniam doloremque magnam fuga ex.
                </p>
                <p className="main-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt veritatis facilis est 
                    impedit asperiores sapiente, optio autem officia sequi unde, possimus aliquid ipsam maiores, 
                    dolorum architecto corporis. Architecto, accusamus nesciunt.
                </p>
                <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit, laboriosam inventore iusto quasi earum!</p>
            </div>
        </div>
     );
}
 
export default Home;