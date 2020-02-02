import React from 'react';
import CollectionPreviewItem from '../preview-collectionItems/PreviewCollectionItem.component'

const CollectionPreview = ({ shopdata, addItems, showCount }) => (
    <div className="shop-page">
        {
            shopdata.map(data =>
                <CollectionPreviewItem key={data.id} shopdata={data} addItems={addItems} showCount={showCount} />
            )
        }
    </div>
)

export default CollectionPreview;