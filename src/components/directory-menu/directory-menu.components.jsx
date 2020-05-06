import React from 'react'
import "./directory-menu.styles.scss"
import {MenuItem} from '../menu-item/menu-item.components'

export const DirectoryMenu = (props) => (
    <div className="directory-menu">
        {props.sections.map(({title, id, imageUrl}) => {
            return (
                <MenuItem 
                key = {id}
                imageUrl = {imageUrl}
                title = {title}
                subtitle = {"Shop Now"}
                ></MenuItem>
            )
        })}
    </div>
)