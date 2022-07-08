import React from 'react';
import logo from './logo.svg';
import './App.css';

import groupTest from '../back/main';
import TransactionList from './TransactionList';
import Group from './Group/Group';

function App() {
  const group = groupTest();

  return (
    <div className="App">
      <Group group={group} />
    </div>
  );
}

export default App;
