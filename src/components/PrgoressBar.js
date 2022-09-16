import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProgressBar = (props) => {
    useEffect (() => {
        Aos.init({duration: 500});
    } , []);
    return ( 
        
        <div className="progress-bar">
                <div className="progress-bar-inner" style={{width:props.percentage}} data-aos="fade-right"></div>
                <span className="indication" style={{left:`calc(${props.percentage} - 17.5px)`}} data-aos="zoom-in" data-aos-delay="500">{props.percentage}</span>
        </div>
     );
}
 
export default ProgressBar;