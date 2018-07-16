
import React, {Component} from 'react'
import Input from './Input'
import Submit from './Submit'


class SignUp extends Component{
    state = {
        email: '',
        password: '',
        cfpassword: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
     
    handleSubmit = async e => {
        e.preventDefault() 
        console.log(this.state)
        try {
            let bodyData = {
                email: this.state.email,
                password: this.state.password
            }
            console.log(bodyData)
            const response = await fetch('http://guver.net/api/V1/auth/signup', {
              method: 'post',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(bodyData),
              credentials: 'include'
              
            })
            const data = await response.json()
            
            console.log(data)
          }
          catch(err) {
              console.log(err)
          }
    }
    render(){
        const { email, password, cfpassword } = this.state
 

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label><input type="input" name='email' value={email} onChange={this.handleChange}></input><br/>
                    <label>Password</label><input type="input" name='password' value={password} onChange={this.handleChange}></input><br/>
                    <label>Cf Password</label><input type="input" name='cfpassword' value={cfpassword} onChange={this.handleChange}></input><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SignUp