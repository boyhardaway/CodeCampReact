import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
class CreatePikka extends Component{
    state = {
        caption: ''
    } 
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()  
        const formData = new FormData()
        const pictureFile = document.getElementById('picture').files[0]
        formData.append('caption', this.state.caption)
        formData.append('picture', pictureFile)
         try {
          const response = await fetch('http://guver.net/api/v1/pikka', {
            method: 'post',
            body: formData,
            credentials: 'include'
          })
          
          if (response.status === 200){
            this.props.history.push('/')
          }
             
        }catch(err){
            console.log(err)
        } 
    } 
    render(){
        const { caption }= this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Caption</label><input type="input" name='caption' value={caption} onChange={this.handleChange}></input><br/>
                    <label>Picture File Input</label><input type="file" id="picture" name="picture" accept="image/*" /><br/>  
                    <input type="submit" value="Create" />
                </form>
            </div>
        )
    }
}
 
export default CreatePikka