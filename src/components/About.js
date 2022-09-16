import ProgressBar from './PrgoressBar';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


const About = () => {
    useEffect (() => {
        Aos.init({duration: 2000});
    } , []);

    return ( 
        <section className="about" id='about'>
            <header className="section-header">
                <h5 className='section-title'>ABOUT</h5>
                        <h1 data-aos="fade-up">Let me introduce myself.</h1>

            </header>
            <article className="intro">
                <img data-aos="zoom-in" src={require('../ressources/profile-pic.jpg')} alt="Ahmed Belloula's " />
                <p data-aos="fade-left">I'm Ahmed Belloula and I'm a software engineer student at <abbr title="University of Scinence and Technology Houari Boumediene">USTHB</abbr>. I'm currently working on my bachelor's degree in software engineering.</p>
            </article>
            <main>
                <article className="profile">
                    <h3 className='article-title' data-aos="zoom-in">PROFILE</h3>
                    <p data-aos="fade-right">Software engineering student and a self-taught web developer. Always motivated to learn new technologies in order to solve problems and challenges. Ability to work in a team to translate customer needs into technical solutions. Looking to implement and launch new projects as a junior software engineer. </p>

                    <ul className="personal-infos">
                        <li data-aos="fade-down">
                            <strong className='info-title'>FULLNAME:</strong>
                            <span className='info-data'>Ahmed Amine Belloula</span>
                        </li>
                        <li data-aos="fade-down" data-aos-delay="10">
                            <strong className='info-title'>BIRTH DATE:</strong>
                            <span className='info-data'>July 29, 2002</span>
                        </li>
                        <li data-aos="fade-down" data-aos-delay="20">
                            <strong className='info-title'>JOB:</strong>
                            <span className='info-data'>Software Engineering student,Frontend Developer</span>
                        </li>
                        <li data-aos="fade-down" data-aos-delay="30">
                            <strong className='info-title'>ADDRESS</strong>
                            <span className='info-data'>Ain Yagout, Batna, Algeria</span>
                        </li>
                        <li data-aos="fade-down" data-aos-delay="40">
                            <strong className='info-title'>EMAIL:</strong>
                            <span className='info-data'>belloulaahmed7@gmail.com</span>
                        </li>
                    </ul>
                </article>
                <article className="skills" >
                <h3 className='article-title' data-aos="zoom-in">SKILLS</h3>
                <p data-aos="fade-left">I am always learning new web development technologies, I recently started learning ReactJs, Redux, nodeJs. I aim to be a mern stack developer. in addition to the programming languages below, I also know: SQL, PYTHON, C, JAVA. </p>
                <div className="skill-container">
                    <h3 >HTML5</h3>
                    <ProgressBar percentage="80%"/>
                </div>
                <div className="skill-container">
                    <h3>CSS3</h3>
                    <ProgressBar percentage="75%"/>
                </div>
                <div className="skill-container">
                    <h3>JAVASCRIPT</h3>
                    <ProgressBar percentage="65%"/>
                </div>
                <div className="skill-container">
                    <h3>REACTJS</h3>
                    <ProgressBar percentage="40%"/>
                </div>
                <div className="skill-container">
                    <h3>PHP</h3>
                    <ProgressBar percentage="50%"/>
                </div>
                </article>
            </main>
            <aside className="btn-container">
                <a  className='stroke-btn' href="#contact">HIRE ME</a>
                <a className='primary-link' href={require("../ressources/Belloula_Ahmed_CV.pdf")} download="Ahmed_Belloula_CV">
                    DOWNLOAD CV
                </a>
            </aside>
        </section>
    );
}
 
export default About;