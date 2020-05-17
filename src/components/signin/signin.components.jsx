import React, {Component} from 'react'
import './signin.styles.scss'

import FormInput from '../form-input/form-input.components'
import CustomButton from '../custom-button/custom-button.components'

class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit Form")
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]:value
        }, () => { 
            console.log(this.state)
        })
    }

    render() {
        return (
            <div className="signin">
                <h1>Sign in with your email and password</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange}
                        value = {this.state.email}
                        label='email'    
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        handleChange={this.handleChange}
                        value = {this.state.password}
                        label='password'
                    />
                    <CustomButton type='submit'> 
                        Sign In
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default Signin;