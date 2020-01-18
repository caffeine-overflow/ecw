import React, { Component } from 'react';
import SHOP_DATA from './Shopdata'
import CollectionPreview from '../../components/preview-collections/PreviewCollection.component'

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }
    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collections.map(c =>
                        <CollectionPreview key={c.id} collectionArray={c} />
                    )
                }
            </div>
        );
    }
}

export default ShopPage;