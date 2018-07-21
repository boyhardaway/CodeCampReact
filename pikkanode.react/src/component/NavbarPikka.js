import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class NavbarPikka extends Component{
    render(){
        return <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" > 
                            <Link to='/'><img src="/photos/pikkanode.png" width="100" height="200"/></Link>
                        </a>
                        <a class="navbar-item">
                            <Link to='/createpage'>Create Pikka</Link>
                        </a>
                    </div>
                    <div id="navMenubd-example" class="navbar-menu">
                        <div class="navbar-start">
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link  is-active" >
                                    SignUp/SignIn
                                </a>
                                <div class="navbar-dropdown">
                                    <a class="navbar-item"> 
                                        <Link to='/signup'>SignUp</Link>
                                    </a>
                                    <a class="navbar-item"> 
                                        <Link to='/signin'>SignIn</Link>
                                    </a>
                                    <a class="navbar-item"> 
                                        <Link to='/signout'>SignOut</Link>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </nav>
    } 
} 
export default NavbarPikka