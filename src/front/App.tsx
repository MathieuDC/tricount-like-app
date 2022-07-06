import React from 'react';
import logo from './logo.svg';
import './App.css';

import groupTest from '../back/main';

function App() {
  const group = groupTest();

  return (
    <div className="App">
      Hello world !
    </div>
  );
}

export default App;
