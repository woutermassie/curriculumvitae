import React from 'react';
import './block.styles.scss';

const Block = ({ name, content, className }) =>(
    <div className={`mainBlock block ${className}`}>
        <div className='name'>
            {name}
        </div>
       <div className='content' dangerouslySetInnerHTML={{ __html: content }}>
       
       </div>
    </div>
);

export default Block;