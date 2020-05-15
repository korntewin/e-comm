import React from 'react'
import './collection-item.styles.scss'

const CollectionItem = ({name, price, imageUrl}) => (
    <div className="collection-item">
        <div 
            style = {{
                backgroundImage : `url(${imageUrl})`
            }}
            className="background-image" 
        ></div>
        <div className="item-detail">
            <span className="item-name"> {name} </span>
            <span className="item-price"> {price} </span>
        </div>
    </div>
)

export default CollectionItem;