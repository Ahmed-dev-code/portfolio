import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ProjectCard = (props) => {
    useEffect (() => {
        Aos.init({duration: 2000});
    } , []);

    const pLanguages = props.languages.map(language =><p className="language">{language}</p> )

    return ( 
        <div className="project-card" data-aos="fade-right">
            <div className="project-img">
                <img loading="lazy" src={props.image} alt="vegan store" />
            </div>
            <div className="project-info">
                <h2 className="project-title">{props.title}</h2>
                <p className="project-description">{props.description}</p>
                <div className="languages-container">
                    {pLanguages}
                </div>
                <aside className="project-links">
                    <a title="visit the github repository" href={props.github} className="project-link" target="_blank" rel="noreferrer" >
                        <i className="fab fa-github"></i>
                    </a>
                    <a href={props.demo} title="visit the live websites" target="_blank" rel="noreferrer">
                        <i class="fas fa-external-link-alt"></i> 
                    </a>
                </aside>
            </div>
        </div>                
    );
}
 
export default ProjectCard;