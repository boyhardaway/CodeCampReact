import React, {Component} from 'react'

class NavbarPikka extends Component{
    render(){
        return <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <img src="/photos/pikkanode.png" width="100" height="200"/>
                        </a>
                        <a class="navbar-item" href="/">
                            Create Pikka
                        </a>
                    </div>
                    <div id="navMenubd-example" class="navbar-menu">
                        <div class="navbar-start">
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link  is-active" href="/documentation/overview/start/">
                                    SignUp/SignIn
                                </a>
                                <div class="navbar-dropdown ">
                                    <a class="navbar-item " href="/">
                                        SignUp
                                    </a>
                                    <a class="navbar-item " href="/">
                                        SignIn
                                    </a>
                                    <a class="navbar-item " href="/">
                                        SignOut
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </nav>
    } 
} 
export default NavbarPikka