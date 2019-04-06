import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface State {
  passArray:Array<string>
}

interface Props {
  
}

class App extends Component < Props , State > {
  constructor(props: Props) {
    super(props);
    this.state = { passArray :[]}
    this.state.passArray.push("xxx")
  }

  componentDidMount=()=>{
    //fetch('https://v7back.herokuapp.com/api/passwords')
    fetch('/api/passwords')
      .then(response => response.json())
      .then(json => this.setState({passArray: json.Data } ))
      .then(_ => console.log(this.state.passArray))      
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {
              this.state.passArray[1]
            }
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