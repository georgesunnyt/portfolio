import './Homepage.css'
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Homepage() {
    return (
        <>
            <div className='intro-container'>
                <div>
                   <div className='welcome-text'>Hello</div> 
                   <div className='fade-in'>I'm George Sunny T</div>
                   <div className='fade-in'>React web developer - 5years</div>
                </div>
                <div>
                    <img className="profile-pic"src={process.env.PUBLIC_URL + '/GeorgeSunnyT.png'} alt='a bearded good looking guy in mid 20s'></img>
                </div>
                <div className='description'>
                    I enjoy creating responsive web apps that scale on both large screens and mobile devices.
                </div>
                <div className='skill-box'>
                    <div>Core skills</div>
                    <div className='core-skills'>
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>Javascript</div>
                        <div>ES6</div>
                    </div>
                    <div className='core-skills'>
                        <div>CSS Animation</div>
                    </div>
                    <div className='core-skills'>
                        <div>ReactJS</div>
                        <div>Hooks</div>
                        <div>Redux</div>
                    </div>
                    <div className='core-skills redux'>
                        <div>Redux Thunks</div>
                        <div>Redux Toolkit</div>
                        <div>RTK Query</div>
                    </div>
                    <div className="basic-skills-title">Basic Skills</div>
                    <div className='core-skills'>
                        <div>Java 8</div>
                        <div>Springboot</div>
                        <div>SQL</div>
                    </div>
                </div>
                <a className='skill-box portfolio-box' href='https://social-house-expirement.netlify.app/'>
                    <div>Portfolio</div>
                    <div>
                        <img className="portfolio-1-image" src={process.env.PUBLIC_URL + '/social-house.png'} alt="a black background with social house written on it in white"></img>
                    </div>
                    <div className='portfolio-description'>An experimental social media application</div>
                </a>
                <div className='contact-row'>
                    <a href='https://www.linkedin.com/in/georgesunnyt/'>
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                    <a href='https://github.com/georgesunnyt/Social-House-frontend'>
                        <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                    </a>
                </div>
            </div>
        </>
    )
}