import React, {Component} from 'react'
import Input from './Input' 
class SignIn extends Component{
    state = {
        email: '',
        password: '',
        isAuth : false
    } 

    loginPass = () => {
        this.setState({ isAuth: true });
    }

    loginNotPass = () => {
        this.setState({ isAuth: false });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
     
    handleSubmit = async e => {
        e.preventDefault()  
        try {
            let bodyData = {
                email: this.state.email,
                password: this.state.password
            } 
            const response = await fetch('http://guver.net/api/V1/auth/signin', {
              method: 'post',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(bodyData),
              credentials: 'include'
              
            })
             
            response.status == 200 ? this.loginPass():this.loginNotPass()
            console.log(this.state.isAuth)
          }
          catch(err) {
              console.log(err)
          }
    }
    render(){
        const { email, password } = this.state

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label><input type="input" name='email' value={email} onChange={this.handleChange}></input><br/>
                    <label>Password</label><input type="input" name='password' value={password} onChange={this.handleChange}></input><br/> 
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SignIn