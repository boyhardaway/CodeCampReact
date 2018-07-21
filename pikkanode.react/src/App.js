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
    this.setState({ isAuth: true });
  };

  loginNotPass = () => {
    this.setState({ isAuth: false });
  };

  render() {
    return (
      <div>
        <NavbarPikka/>
        <Main loginPass={this.loginPass}
              loginNotPass={this.loginNotPass}
        />
        <FooterPikka/>
      </div> 
    )
  }
}

export default App;
