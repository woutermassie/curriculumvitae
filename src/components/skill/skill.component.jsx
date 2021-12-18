import React from 'react';
import './skill.styles.scss';


const Skill = ({ name, expertise }) =>(
    <div className="skill">
   
    <div className='label'>  
        <div>
            {name}
        </div>
    <div className='label-small'>
         {expertise}
         </div>
    </div>
    <div className='line'>
        <div className={expertise}>
        </div>
        <div className='background'></div>
    </div>
    </div>
);

export default Skill;