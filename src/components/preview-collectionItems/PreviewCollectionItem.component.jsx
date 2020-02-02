import React from 'react'
import './PreviewCollection-styles.scss'
import CollectionItem from '../collection-items/collection-items.component'

const PreviewCollection = ({ shopdata, addItems, showCount }) => (
    <div className="collection-preview">
        <h1 className="title">{shopdata.title.toUpperCase()}</h1>
        <div className="preview">
            {shopdata.items
                .filter((i, idx) => idx < showCount) //only showing 4 items since it is a preview
                .map(i =>
                    <CollectionItem key={i.id} item={i} addItems={addItems} />
                )}
        </div>
    </div>
)

export default PreviewCollection;