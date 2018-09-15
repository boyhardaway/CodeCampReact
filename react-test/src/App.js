import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer';
import PictureCard from './component/PictureCard'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <PictureCard/>
        <Footer/>
      </div>
    )
  }
}

export default App;
