import React from "react"
import {withRouter} from 'react-router-dom'
import "./menu-item.styles.scss"

export const MenuItem = withRouter(({title, subtitle, imageUrl, size, linkUrl, history, match}) => (
    <div 
        className = {`menu-item ${size}`}
        onClick = {()=> {
            // console.log(match) match.url is the path of HomePage component
            history.push(`${match.url}${linkUrl}`)}}>
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
))

// withRouter(MenuItem);