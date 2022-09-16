import ProjectCard from "./ProjectCard";




const Portfolio = () => {
    
    const projects = [
        {
            title: "Vegan Store",
            description: "Vegan Store is a template of a website that sells vegan products, it is a static landing page. ", 
            image: require("../ressources/vegan-store2.jpg"),
            demo: "https://ahmed-dev-code.github.io/vegan-store/",
            github:"https://github.com/Ahmed-dev-code/ahmed-dev-code.github.io",
            languages:['HTML5','CSS3']
        },
        {
            title: "Roll The Dice",
            description: "Roll The Dice a game i built to practice ReactJs. it cover the main concepts of ReactJs.",
            image: require("../ressources/roll-the-dice2.jpg"),
            demo: "https://ahmed-dev-code.github.io/roll-the-dice-game/",
            github:"https://github.com/Ahmed-dev-code/roll-the-dice-game",
            languages:['HTML5','CSS3','REACTJS']
        }
    ];

    const projectsList = projects.map(project => {
        return <ProjectCard key={project.title} {...project} />;
    }
    );
    return ( 
        <section className="portfolio" id="portfolio">
            <header className="section-header">
                <h5 className='section-title'>PORTFOLIO</h5>
                <h1>Check Out Some of My Works.</h1>
                <p className="intro">I'm happy to show you some of my recent work. Take a look, read the description of each project to learn more, or you can even see a live demo by clicking on the link under the description. I am always looking for new projects.</p>
            </header>
            <article className="projects">
                {projectsList}
            </article>
        </section>
     );
}
 
export default Portfolio;