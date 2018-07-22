import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarPikka from './component/NavbarPikka'
import Main from './component/Main'
import FooterPikka from './component/FooterPikka'

class App extends Component {
  state = {
    isAuth : false
  }
  loginPass = () => {
    this.setState(prevState => ({ isAuth: true }));
    console.log(this.state.isAuth)
  };

  loginNotPass = () => {
    this.setState(prevState => ({ isAuth: false }));
    console.log(this.state.isAuth)
  };

  render() {
    return (
      <div>
        <NavbarPikka />
        <Main loginPass={this.loginPass}
              loginNotPass={this.loginNotPass}
        />
        <FooterPikka/>
      </div> 
    )
  }
}

export default App;
