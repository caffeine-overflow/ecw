import React from 'react';
import './Menu-items.styles.scss'

const MenuItem = ({ section }) => (
    <div style={{ backgroundImage: `url(${section.imageUrl})` }} className={`${section.size} menu-item`} >
        <div className='content'>
            <h1 className='title'>{section.title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div >
)
export default MenuItem;