import React from 'react';
import './personal-info.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
 import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const PersonalInfo = () =>(
    <div className='PersonalInfoBlock block'>
      
        <div className='title'>
          PERSONAL INFO
        </div>
        <br />
        06/07/1992 <br /> <br />
        <a href="tel:+32498-322568">+32498/32.25.68</a><br />
       
        <a href="mailto:woutermassie@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />&nbsp;
        woutermassie@gmail.com</a><br />
        <a href="https://www.linkedin.com/in/wouter-massie">
        <FontAwesomeIcon icon={faLinkedin} />&nbsp;
        linkedin.com/in/wouter-massie</a><br />
        <br />
        Stijn Streuvelslaan 6<br />
        3010 Kessel-Lo<br />
        Belgium<br />
        
    </div>
);

export default PersonalInfo;
