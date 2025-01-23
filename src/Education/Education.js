import './Education.css';
import UCLogo from '../images/uc.png';
import KLULogo from '../images/klu.jpeg';

const Education = () => {
    return (
      <div className="eduPage">
        <div className="eduHeader">
            EDUCATION
        </div>
        <div className="eduDetails">
            <div className="uc">
                <svg width="150" height="150">
                    <image href={UCLogo} width="150" height="150"/>
                </svg>
                <div className="degree">
                    Master's Degree in Computer Science
                </div>
            </div>
            <div className="klu">
                <svg width="150" height="150">
                    <image href={KLULogo} width="150" height="150"/>
                </svg>
                <div className="degree">
                    Bachelor's Degree in Computer Science
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Education;