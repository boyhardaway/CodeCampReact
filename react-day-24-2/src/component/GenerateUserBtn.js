import React, {Component} from 'react'

class GenerateUserBtn extends Component{
    state = {
        urlPhoto: '', 
        email: '',
        gender: '',
        title: '',
        first: '',
        last: ''
    }
 
    handelChange = async (e) => {
        fetch('https://randomuser.me/api/').then(response => {
            return response.json();
         }).then(res =>{
            console.log(res)
            this.setState(
                {
                    urlPhoto: res.results[0].picture.large, 
                    email: res.results[0].email,
                    gender: res.results[0].gender,
                    title: res.results[0].name.title,
                    first: res.results[0].name.first,
                    last: res.results[0].name.last
                }
            )
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return (
            <div>
                <img src={this.state.urlPhoto} />
                <p>email : {this.state.email}</p>
                <p>gender : {this.state.gender}</p>
                <p>{this.state.title} {this.state.first} {this.state.last}</p> 
                <button onClick={this.handelChange}>GenerateUser</button>
            </div>
        )
    }

}

export default GenerateUserBtn