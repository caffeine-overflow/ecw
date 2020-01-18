import React from 'react'
import './PreviewCollection-styles.scss'
import CollectionItem from '../collection-items/collection-items.component'

const PreviewCollection = ({ collectionArray }) => (
    <div className="collection-preview">
        <h1 className="title">{collectionArray.title.toUpperCase()}</h1>
        <div className="preview">
            {collectionArray.items
                .filter((i, idx) => idx < 4)
                .map(i =>
                    <CollectionItem key={i.id} item={i} />
                )}
        </div>
    </div>
)

export default PreviewCollection;