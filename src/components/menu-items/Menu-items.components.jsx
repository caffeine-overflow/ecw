import React from 'react';
import { withRouter } from 'react-router-dom'
import './Menu-items.styles.scss'

const MenuItem = ({ section, history, match }) => (
    <div className={`${section.size} menu-item`} onClick={() => history.push(`${match.url}${section.linkUrl}`)}>
        <div className="background-image" style={{ backgroundImage: `url(${section.imageUrl})` }} >
        </div>
        <div className='content'>
            <h1 className='title'>{section.title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div >
)
export default withRouter(MenuItem);