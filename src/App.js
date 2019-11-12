import React from 'react';
import Header from './Components/Header/Header';
import Display from './Components/Display/Display';
import Timer from './Components/Timer/Timer';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header></Header>
      <Display></Display>
      <Timer></Timer>
    </div>
  );
}

export default App;
