import React from 'react'
import "./directory-menu.styles.scss"
import {MenuItem} from '../menu-item/menu-item.components'

export const DirectoryMenu = (props) => (
    <div className="directory-menu">
        {props.sections.map(({id, ...otherProps}) => {
            return (
                <MenuItem 
                key = {id}
                {...otherProps}
                ></MenuItem>
            )
        })}
    </div>
)