import SocialBar from "./SocialBar";
import Aos from "aos"
import 'aos/dist/aos.css'

const Hero = () => {
    Aos.init({duration:2000})

    return ( 
        <div className="hero" id="home">
            <div className="hero-text">
                <h4>HELLO, WORLD.</h4>
                <h1>
                    I'm Ahmed Amine Belloula.                    
                </h1>
                <p className="positions-container">
                    <span>Software Engineering student</span>
                    <span> FRONT-END DEVELOPER</span>
                </p>
            </div>
            <a href="#about" className="more-btn">
                MORE ABOUT ME  
                <i className="fas fa-angle-down"></i>
            </a>
            <SocialBar/>
        </div>

     );
}
 
export default Hero;