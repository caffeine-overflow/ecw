import React, { Component } from 'react';
import SHOP_DATA from './Shopdata'
import CollectionPreviews from '../../components/collection-preview/collection-preview'

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }
    render() {
        var shopdata = [];
        var showCount = 30;
        if (this.props.category === "main") {
            shopdata = this.state.collections;
            showCount = 4;
        }
        else if (this.props.category === "hats") shopdata = [this.state.collections[0]];
        else if (this.props.category === "sneakers") shopdata = [this.state.collections[1]];
        else if (this.props.category === "sweaters") shopdata = [this.state.collections[2]];
        else if (this.props.category === "womens") shopdata = [this.state.collections[3]];
        else if (this.props.category === "mens") shopdata = [this.state.collections[4]];
        else shopdata = this.state.collections;

        return (
            <CollectionPreviews shopdata={shopdata} addItems={this.props.addItems} showCount={showCount} />
        );
    }
}

export default ShopPage;