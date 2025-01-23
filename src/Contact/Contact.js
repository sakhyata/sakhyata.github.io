import './Contact.css';
import 'font-awesome/css/font-awesome.min.css';

const Contact = () => {
    return (
        <div className="contactPage">
            <div className="socialLinks">
                {/* LinkedIn Icon */}
                <a href="https://www.linkedin.com/in/sakhyata" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin fa-2x"></i> 
                </a>
                {/* GitHub Icon */}
                <a href="https://github.com/sakhyata" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github fa-2x"></i>
                </a>
                {/* Email Icon */}
                <a href="mailto:sakhyata@gmail.com">
                    <i className="fa fa-envelope fa-2x"></i> 
                </a>
            </div>
            <div className="pageEnd">
                <span className="nm">SAKHYATA JASTHI</span>
                <span className="cr">©2025</span>
            </div>
        </div>
    );
  }
  
  export default Contact;