import React, {Component} from 'react'
import './signin.styles.scss'

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
                <h1>If you already have an id</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input name='email' type='email' onChange={this.handleChange}/>
                    <label>password</label>
                    <input name='password' type='password' onChange={this.handleChange} />
                    <button type='submit'>Sign In</button>
                </form>
            </div>
        )
    }
}

export default Signin;