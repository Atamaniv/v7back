import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface State {
  pass:Array<string>
}

interface Props {
  
}

class App extends Component < Props , State > {
  constructor(props: Props) {
    super(props);
    this.state = { pass :[]}    
  }

  componentDidMount=()=>{
    //fetch('https://v7back.herokuapp.com/api/passwords')
    fetch('http://localhost:5000/api/passwords')
    //fetch('/passwords')    
      // .then(res => res.json())
      // .then(pass => this.setState({ pass }))
      // .then(_ => console.log(this.state.pass.toString()))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {
              //this.state.passArray[1]
            }
            TSX forever
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React and Typescript
          </a>
        </header>
      </div>
    );
  }
}

export default App;