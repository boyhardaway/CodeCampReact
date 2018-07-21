import React, { Component } from "react";
import ReactDOM from "react-dom";
import ButtonBar from "./ButtonBar";
import Display from "./Display";

class App extends Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrementCount = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  resetCount = () => {
    this.setState(() => ({ count: 0 }));
  };

  render() {
    return (
      <div className="container">
        <div className="border border-secondary rounded">
          <Display count={this.state.count} />
          <ButtonBar
            onClickAdd={this.incrementCount}
            onClickReset={this.resetCount}
            onClickDel={this.decrementCount}
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
