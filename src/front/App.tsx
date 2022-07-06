import React from 'react';
import logo from './logo.svg';
import './App.css';

import groupTest from '../back/main';
import TransactionList from './TransactionList';

function App() {
  const group = groupTest();

  return (
    <div className="App">
      <TransactionList transactions={group.transactions}></TransactionList>
    </div>
  );
}

export default App;
