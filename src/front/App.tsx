import React from 'react';
import logo from './logo.svg';
import './App.css';

import mainTest from '../back/main';

function App() {
  return (
    <div className="App">
      <button onClick={mainTest}>Test</button>
    </div>
  );
}

export default App;
