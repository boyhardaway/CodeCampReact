import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './component/Card'
import BtnGen from './component/BtnGen'
class App extends Component {
  //
  state = { photos: ['tent1','tent2','tent3','tent4','tent5','tent1','tent2','tent3','tent4','tent5'] }
  handleClick = (e) => {
    this.setState({
      photos: this.shuffle(this.state.photos)
        }
    )
  }
  componentDidMount() {
    this.setState({
      photos: this.shuffle(this.state.photos)
        }
    )
  }

  shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };
  render() {
    
    return ( 
      <div>
        {/* <Card photos={this.state.photos}/> */}
        <div class="columns">
          <div class="column"><Card photo={this.state.photos[0]}/></div>
          <div class="column"><Card photo={this.state.photos[1]}/></div>
          <div class="column"><Card photo={this.state.photos[2]}/></div>
          <div class="column"><Card photo={this.state.photos[3]}/></div>
          <div class="column"><Card photo={this.state.photos[4]}/></div>
        </div> 
        <div class="columns">          
          <div class="column"><Card photo={this.state.photos[5]}/></div>
          <div class="column"><Card photo={this.state.photos[6]}/></div>
          <div class="column"><Card photo={this.state.photos[7]}/></div>
          <div class="column"><Card photo={this.state.photos[8]}/></div>
          <div class="column"><Card photo={this.state.photos[9]}/></div>
        </div> 
        <hr/>
        <button type='button' onClick={this.handleClick}>Generate</button>
      </div> 
    )
  }
}

export default App


