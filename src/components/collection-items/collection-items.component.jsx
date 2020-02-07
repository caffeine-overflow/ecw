import React, { Component } from 'react';
import './collection-items.styles.scss'
import CustomButton from '../custom-button/custom-button'

class CollectionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.item.imageUrl[0].image
        };
    }
    render() {
        return (
            <div className='collection-item'>
                <div className='image' style={{ backgroundImage: `url(${this.state.images})` }}
                    onMouseEnter={() => this.setState({ images: this.props.item.imageUrl[1].image })}
                    onMouseLeave={() => this.setState({ images: this.props.item.imageUrl[0].image })}
                />
                <div className="collection-footer">
                    <span className='name'>{this.props.item.name}</span>
                    <span className='price'>{this.props.item.price}</span>
                </div>
                <CustomButton onClick={() => this.props.addItems(this.props.item)} inverted>Add to Cart</CustomButton>
            </div>
        );
    }
}
export default CollectionItem;
