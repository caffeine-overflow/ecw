import React from 'react'
import './collection-items.styles.scss'
import CustomButton from '../custom-button/custom-button'

const CollectionItem = ({ item, addItems }) => {
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${item.imageUrl})` }} />
            <div className="collection-footer">
                <span className='name'>{item.name}</span>
                <span className='price'>{item.price}</span>
            </div>
            <CustomButton onClick={() => addItems(item)} inverted>Add to Cart</CustomButton>
        </div>
    );
}
export default CollectionItem;
