import React, {Component} from 'react'
class ButtonLike extends Component{
    handleClick = msg => e =>{
        console.log(msg, e.target.name)
        alert(e.target.name)
    }
    render(){
        return <button name="myBtn" onClick={this.handleClick('onClick-Like : ')}>Like</button>
    }
}
 
export default ButtonLike