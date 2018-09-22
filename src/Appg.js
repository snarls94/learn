import React, { Component } from 'react';
import logo from './logo.svg';
import App1 from './App1'
import './App.css';

class Appg extends Component {
  state={
    dog: "sruthi",
    cat: "Click here"
  }
  componentWillUpdate() {
      alert("Sruthi") 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to sruthi</h1>
        </header>
        <p className="App-intro">
         <div>{this.state.dog}</div> 
   
        <div onMouseOver={() => { this.setState({cat: "Okay"})}}>{this.state.cat}</div> 
    
        </p>
        <App1 ok={this.state.dog} />
      </div>
    );
  }
}

export default Appg;
