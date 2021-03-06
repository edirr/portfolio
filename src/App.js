import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faHome, faEnvelope, faSignInAlt, faUser, faUnlock, faCheckCircle, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {fab} from "@fortawesome/free-brands-svg-icons";
import Scrollspy from 'react-scrollspy';
import './App.css';

library.add(fab, faChevronCircleDown, faHome, faEnvelope, faSignInAlt, faUser, faUnlock, faCheckCircle , faFileAlt );

class App extends Component {
  render() {
    return (
      <div className="App">

        <div id="home"className="landing">
          <div className="star s-1"></div>
          <div className="star s-2"></div>
          <div className="star s-3"></div>
        <h1 className="first-name">Eric</h1>
        <h1 className="last-name">Dirr</h1>
        <h1 className="dev">Web Developer</h1>
        <a className="enter-button" href="#about">Enter</a>
        </div>
        <Scrollspy items={ ['home', 'about', 'projects', 'contact'] } className="nav" currentClassName="is-current">
            <div className="nav-item">
            <a href="#home">Home</a>
            </div>
            <div className="nav-item">
            <a href="#about">About</a>
            </div>
            <div className="nav-item">
            <a href="#projects">Projects</a>
            </div>
            <div className="nav-item">
            <a href="#contact">Contact</a>
            </div>
          </Scrollspy>
        <div className="about" id="about">


          <div className="about-content">
            <div className="image-with-links">
              <div className="profile-image">
              </div>
              <div className="links">
                <a href="https://github.com/edirr" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="github-icon" icon={['fab', 'github']} /></a>
                <a href="https://www.linkedin.com/in/eric-dirr/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="linkedin-icon" icon={['fab', 'linkedin']} /></a>
                <a href="#contact"><FontAwesomeIcon className="email-icon" icon="envelope" /></a>
              <a href="Eric_Dirr_Resume.pdf" download="Eric_Dirr_Resume" target="_blank" ><FontAwesomeIcon className="resume-icon" icon="file-alt" /></a> {/* */}
              </div>
            </div>
            <div className="bio">
            <p>A passionate Web Developer with a background in education,
            with a strong emphasis on learning and helping others through
            collaborations. Driven by the challenge of solving difficult
            problems though creative solutions. My keen sense of detail and
            organization can be seen throughout my work.
            </p>
            </div>
            <div className="skills-list">
              <div className="skill-1"></div>
              <div className="skill-2"></div>
              <div className="skill-3"></div>
              <div className="skill-4"></div>
              <div className="skill-5"></div>
              <div className="skill-6"></div>
              <div className="skill-7"></div>
              <div className="skill-8"></div>
              <div className="skill-9"></div>
              <div className="skill-10"></div>
            </div>
          </div>
        </div>
        <div className="background-image"></div>
        <div className="background-image-overlay"></div>
        <div id="projects" className="project-section">
          <div className="projects">
            <div className="project">
            <h1 className="project-heading" > Projects</h1>
              <div className="project-image project-image-1">
              </div>
              <div className="project-info">
              <h3 className="project-name">
              Tracked
              </h3>
              <p>
              Teacher friendly data tracker to keep record of students' progress in various subjects. Built with React, Node.js, Express, Sequelize and PostgreSQL to display data presented in visually appealing interactive charts using Chart.js.
              </p>
              </div>
              <div className="defender-buttons">
              <a className="contact-button" href="https://github.com/edirr/tracked" target="_blank" rel="noopener noreferrer">Check out the code</a>
              <a className="contact-button" href="https://tracked-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live App</a>
              </div>
            </div>
            <div className="project">
              <div className="project-image project-image-6">
              </div>
              <div className="project-info">
              <h3 className="project-name">
              Weather App
              </h3>
              <p>
              This weather app allows users to search for current weather and a five day forecast for a given city. A weather scene is conditionally rendered depending on the current forecast.Built using React and the open weather api.
              </p>
              </div>
              <div className="defender-buttons">
              <a className="contact-button" href="https://github.com/ED-CVL/weather_app" target="_blank" rel="noopener noreferrer">Check out the code</a>
              <a className="contact-button" href="https://weather-app-ed-cvl.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live App</a>
              </div>
            </div>
            <div className="project">
              <div className=" project-image project-image-4">
              </div>
              <div className="project-info">
              <h3 className="project-name">
              Cafe Select
              </h3>
              <p>Paired with UX/UI to modernize an outdated NYC Swiss cafe's website. Used HTML, CSS and JavaScript to create a sleek mobile friendly site. Users can quickly navigate to the menu and find favorite Swiss dishes and the restaurant's location. </p>
              </div>
              <div className="defender-buttons">
              <a className="contact-button" href="https://git.generalassemb.ly/cafeSelect/cafe2" target="_blank" rel="noopener noreferrer">Check out the code</a>
              <a className="contact-button" href="https://pages.git.generalassemb.ly/cafeSelect/cafe2/" target="_blank" rel="noopener noreferrer">Website</a>
              </div>
            </div>
            <div className="project">
              <div className=" project-image project-image-3">
              </div>
              <div className="project-info">
              <h3 className="project-name">
              Defender Dodge
              </h3>
              <p>
A classic arcade style game built with HTML, CSS, and vanilla JavaScript where you must maneuver your player in and out of the oncoming defenders by using the left and right arrow keys. The defenders will appear at the top of the page and run towards you trying to tackle you. As you proceed to the next level the defenders will appear quicker and with more of them, it becomes increasingly difficult to avoid their tackles.               </p>
              </div>
              <div className="defender-buttons">
              <a className="contact-button" href="https://git.generalassemb.ly/edirr/Defender-Dodge" target="_blank" rel="noopener noreferrer">Check out the code</a>
              <a className="contact-button" href="https://pages.git.generalassemb.ly/edirr/Defender-Dodge/" target="_blank" rel="noopener noreferrer">Play the game</a>
              </div>
            </div>
            <div className="project">
              <div className=" project-image project-image-5">
              </div>
              <div className="project-info">
              <h3 className="project-name">
              HTML Canvas
              </h3>
              <p>
        HTML canvas used to make interactive bouncing balls. Made using only JavaScript. Hover your mouse over the balls and watch them grow!
              </p>
              </div>
              <a className="contact-button" href="https://codepen.io/edirr/pen/NomzwB?editors=0010" target="_blank" rel="noopener noreferrer">Check out the CodePen</a>
            </div>
            <div className="project">
              <div className=" project-image project-image-2">
              </div>
              <div className="project-info">
              <h3 className="project-name">
              Deck of Legends
              </h3>
              <p>
        Baseball fans rejoice! Users can log in to their account and search for their favorite players and add them to their own deck of players and checkout out their historic stats. Built with React and Express to allow for a quick way to learn more about your Hall of Fame favorites.
              </p>
              </div>
              <a className="contact-button" href="https://git.generalassemb.ly/team-b/baseball-hof-deck" target="_blank" rel="noopener noreferrer">Check out the code</a>
            </div>
            
          </div>
        </div>
        <div id="contact" className="contact">
          <h1><span className="say">Say</span> hi!</h1>
          <h2>DON'T BE SHY.</h2>
          <p>If you have any questions or just want to chat, please don't hesitate to contact me.</p>
          <a className="contact-button" href="mailto:ericdirr92@gmail.com">CONTACT</a>
        </div>
        <footer className="footer">
        <p> &copy; 2018 Eric Dirr. All rights reserved.</p>
        </footer>



      </div>
    );
  }
}

export default App;
