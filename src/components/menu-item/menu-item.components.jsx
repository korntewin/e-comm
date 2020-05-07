import React from "react"
import "./menu-item.styles.scss"

export const MenuItem = ({title, subtitle, imageUrl, size}) => (
    <div 
        className = {`menu-item ${size}`}>
        <div 
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
            className="background-image" 
        ></div>
        <div className="content">
            <h1 className="title"> {title.toUpperCase()} </h1>
            <span className="sub-title">{subtitle}</span>
        </div>
    </div>
)