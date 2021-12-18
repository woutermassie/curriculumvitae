import React from 'react';
import './header.styles.scss';

const Header = ({ name }) =>(
    <div className='header'>
        <h1 className='name'>
            {name}
        </h1>
        <h2 className='subtitle'>
            Curriculum Vitae
        </h2>
    </div>
);

export default Header;