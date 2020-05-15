import React from 'react'
import './header.styles.scss'
import {ReactComponent as Logo} from './original.svg'

import {Link} from 'react-router-dom'

const Header = (props) => (
    <div className = "header">
        <Link to ="/" className="logo-holder">
            <Logo className='logo' />
        </Link>

        <div className="shop-contact-holder">
            <Link to = "/shop" className = "shop-link">
                Shop
            </Link>
            <Link to = "/shop">
                <span className="contact-link">Contact</span>
            </Link>
        </div>
    </div>
)

export default Header;