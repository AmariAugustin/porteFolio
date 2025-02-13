import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import githubIcon from '../assets/icons8-github-50.png'
import linkedinIcon from '../assets/icons8-linkedin-50.png'
import emailIcon from '../assets/icons8-email-50.png'
 

function SocialMedia() {
    return (
        <div className="container text-center">
            <h1 id = "scrollspyHeading4">My Social Media</h1>
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="https://github.com/AmariAugustin">
                        <img src={githubIcon} alt="GitHub" width="30" height="30" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/augustin-amari-a8279a293/">
                        <img src={linkedinIcon} alt="LinkedIn" width="30" height="30" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="mailto:amariaugustin4@gmail.com">
                        <img src={emailIcon} alt="SendAMail" width="30" height="30" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SocialMedia;