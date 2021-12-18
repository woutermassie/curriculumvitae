import React from 'react';
import './skillblock.styles.scss';

import Skill from '../skill/skill.component';

const SkillBlock = () =>(
    <div className='skill-block block'>
        <div className='title'>
    SKILLS        
    </div>
        <Skill name='Photoshop' expertise='expert' />
        <Skill name='Animate CC' expertise='expert' />
        <Skill name='JS' expertise='advanced' />
        <Skill name='HTML' expertise='advanced' />
        <Skill name='CSS' expertise='advanced' />
        <Skill name='React' expertise='medium' />
        <ul>
            <li id="skill">Problem solving</li>
            <li id="skill">Willingness to learn</li>
            <li id="skill">Persistance</li>
        </ul>

        <div className='title'>
        LANGUAGE        
        </div>
        <Skill name='Dutch' expertise='native' />
        <Skill name='English' expertise='bilingual' />
        <Skill name='French' expertise='medium' />
        <Skill name='Italian' expertise='beginner' />

    </div>
);

export default SkillBlock;
