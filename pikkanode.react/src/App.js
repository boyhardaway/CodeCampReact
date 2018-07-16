import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarPikka from './component/NavbarPikka'
import Main from './component/Main'
import FooterPikka from './component/FooterPikka'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarPikka/>
        <Main/>
        <FooterPikka/>
      </div> 
    )
  }
}

export default App;
