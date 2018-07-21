import React, {Component} from 'react'
class CreatePikka extends Component{
    state = {
        caption: '',
        picture: ''
    } 
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render(){
        const { caption, picture }= this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Caption</label><input type="input" name='caption' value={caption} onChange={this.handleChange}></input><br/>
                    <label>Picture File Input</label>  <br/>  
                    <input type="submit" value="Create" />
                </form>
            </div>
        )
    }
}
 
export default CreatePikka