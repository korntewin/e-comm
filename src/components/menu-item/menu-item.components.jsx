import React from "react"
import "./menu-item.styles.scss"

export const MenuItem = ({title, subtitle, imageUrl}) => (
    <div 
        style = {{
            backgroundImage: `url(${imageUrl})`
        }}
        className = "menu-item">
        <div className="content">
            <h1 className="title"> {title.toUpperCase()} </h1>
            <span className="sub-title">{subtitle}</span>
        </div>
    </div>
)