import './Experience.css';
import Honeywell from '../images/honeywell.jpeg';
import PTC from '../images/ptc.jpeg';
import Grange from '../images/grange1.png';

const Experience = () => {
    return (
      <div className="expPage">
            <div className="workintro">
                <div className="expHeader">
                    EXPERIENCE
                </div>
                <div className="expIntro">
                    With 7 years of experience as a front-end developer, I bring a proven track 
                    record of transforming design concepts into engaging and responsive web interfaces. 
                    Proficient in HTML, CSS, and JavaScript, I've successfully collaborated on diverse projects, 
                    demonstrating expertise in popular frameworks like React and Aurelia. 
                </div>
            </div>
            <div className="container">
                <div className="column1">
                        <svg width="75" height="75">
                            <image href={Honeywell} width="75" height="75"/>
                        </svg>
                        <div className="company">
                            Honeywell
                        </div>
                        <div className="pos"> 
                            Frontend Engineer (Current)
                        </div>
                        <div className="yoe">
                            4 Years
                        </div>
                        <div className="posDesc">
                            Transformed Experion PKS Explorer with React, yeilding a 70% performance boost. 
                            Reduced defect backlog by 25%, recognized for elevating test coverage 
                            to 80% and delivered high-quality code for 2 major releases.
                        </div>
                        <div className="lt">
                            Languages & Dev Tools
                        </div>
                        <div>
                            <ul>
                                <li>React JS</li>
                                <li>HTML5</li>
                                <li>SCSS</li>
                                <li>Git</li>
                                <li>Bamboo</li>
                                <li>Artifactory</li>
                                <li>Jasmine Framework</li>
                                <li>Visual Studio Code</li>
                            </ul>
                        </div>
                </div>
                <div className="column2">
                    <svg width="75" height="75">
                        <image href={PTC} width="75" height="75"/>
                    </svg>
                    <div className="company">
                        PTC
                    </div>
                    <div className="pos">
                        Frontend Engineer
                    </div>
                    <div className="yoe">
                        2.5 Years
                    </div>
                    <div className="posDesc">
                        Developed front-end features for ThingWorx Platform, integrating UX feedback. 
                        Received Excellence Award for versatile contributions, such as converting Jenkins jobs to pipelines, 
                        and optimizing application performance by 30%.
                    </div>
                    <div className="lt">
                        Languages & Dev Tools
                    </div>
                    <div>
                        <ul>
                            <li>Aurelia JS</li>
                            <li>HTML5</li>
                            <li>SCSS</li>
                            <li>Java</li>
                            <li>Git</li>
                            <li>Jenkins</li>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>Jasmine Framework</li>
                            <li>WebStorm</li>
                            <li>Eclipse</li>
                        </ul>
                    </div>
                </div>
                <div className="column3">
                    <svg width="75" height="75">
                        <image href={Grange} width="75" height="75"/>
                    </svg>
                    <div className="company">
                        Grange Insurance
                    </div>
                    <div className="pos">
                        Software Developer Intern
                    </div>
                    <div className="yoe">
                        2.5 months
                    </div>
                    <div className="posDesc">
                        Developed robust REST APIs for the claims application using Express JS. 
                        Embraced Test Driven Development, achieving 90% code coverage, and collaborated seamlessly in an 
                        Agile environment with frontend developers.
                    </div>
                    <div className="lt">
                        Languages & Dev Tools
                    </div>
                    <div>
                        <ul>
                            <li>Node JS</li>
                            <li>Express JS</li>
                            <li>MongoDB</li>
                            <li>Angular</li>
                            <li>Git</li>
                            <li>Postman</li>
                            <li>Swagger UI</li>
                            <li>Mocha, Chai & Sinon Frameworks</li>
                            <li>Visual Studio Code</li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
    );
  }
  
  export default Experience;