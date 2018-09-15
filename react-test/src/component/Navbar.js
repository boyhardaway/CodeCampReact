import React, {Component} from 'react'

class Navbar extends Component{
    render(){
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <ul class="nav navbar-nav">
                    <li><a href="#"><img id="imgmenu" src="https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png"/></a></li>
                    <li><a href="#">Create Pikak</a></li>
                    <li><a href="#">SignUp/SignIn</a></li>
                    <li><a href="#">SignOut</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar