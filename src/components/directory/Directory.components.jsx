import React, { Component } from 'react';
import MenuItem from '../menu-items/Menu-items.components';
import './directory.styles.scss'

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections:
                [
                    {
                        title: 'BLAZERS',
                        imageUrl: 'https://i.imgur.com/cdjDUOM.jpg',
                        id: 1,
                        size: 'large',
                        linkUrl: 'shop/blazers'
                    },
                    {
                        title: 'SWEATERS',
                        imageUrl: 'https://i.imgur.com/CGDlRcg.jpg',
                        size: 'large',
                        id: 2,
                        linkUrl: 'shop/sweaters'
                    },
                    {
                        title: 'DENIM',
                        imageUrl: 'https://i.imgur.com/AkJTNXp.jpg',
                        id: 3,
                        linkUrl: 'shop/denim'
                    },
                    {
                        title: 'CARDIGANS',
                        imageUrl: 'https://i.imgur.com/sJla1PC.jpg',
                        id: 4,
                        linkUrl: 'shop/cardigans'
                    },
                    {
                        title: 'FLORAL',
                        imageUrl: 'https://i.imgur.com/LlzCs4z.jpg',
                        id: 5,
                        linkUrl: 'shop/floral'
                    }
                ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(section => (
                        < MenuItem key={section.title} section={section} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;