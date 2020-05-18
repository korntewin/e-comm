import React from 'react'
import './signin-page.styles.scss'

import Signin from '../../signin/signin.components'

const SigninPage = (props) => (
    <div className = "signin-page">

        <div className = "sign-in">
            <Signin />
        </div>
        <div className = "sign-up">
        </div>

    </div>
)

export default SigninPage;