import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom';

const app = ()=> {
  return <div> Hi There!</div>
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <p>
          AppleSeeds react app
        </p>
        <a
    
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          click me!
        </a>
      </header>
    </div>
  );
}

export default App;


