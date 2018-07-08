import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarPikka from './component/NavbarPikka'
import PhotoPikka from './component/PhotoPikka'
import FooterPikka from './component/FooterPikka'

class App extends Component {
  render() {
    return (
      [<NavbarPikka/>,<PhotoPikka/>,<FooterPikka/>]
    )
  }
}

export default App;
