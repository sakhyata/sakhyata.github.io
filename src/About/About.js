import './About.css';
import MyImage from '../images/my_image.jpg';

const About = () => {
    return (
      <div className="aboutPage">
        <div className="aboutme">
            <div>
                <svg className="myImg" width="200" height="200">
                    <image href={MyImage} width="200" height="200" alt="SJ"/>
                </svg>
            </div>
            <div className="name">Hello, I am Sakhyata Jasthi</div>
            <div className="role">Frontend Developer & AI Enthusiast</div>
            <div className="intro">I design and code beautiful user interfaces, and I love what I do</div>

            <div className="btn">
               <span><button className="resume">Resume</button></span>
            </div>
        </div>
      </div>
    );
  }
  
export default About;