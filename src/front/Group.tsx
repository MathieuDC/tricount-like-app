
import React from 'react';
import { useState } from "react";
import CGroup from "../back/Group.class";
import AddButton from "./AddButton";
import Balances from "./Balances";
import TransactionList from "./TransactionList";

import groupTest from '../back/main';

import "./Group.css"
import NewTransactionForm from "./NewTransactionForm";
import NewTransaction from './NewTransaction';
import { TransactionI } from '../back/Transaction.class';

interface GroupProps {
  group: CGroup
}

const groupBackEnd = groupTest();

const Group = () => {

  const [groupName, setGroupName] = useState(groupBackEnd.name);
  const [transactions, setTransactions] = useState(groupBackEnd.transactions);
  const [users, setUsers] = useState(groupBackEnd.users);
  const [debts, setDebts] = useState(groupBackEnd.debts);
  const [isBalancesDisplayed, setIsBalancesDisplayed] = useState(false);
  
  const updateState = () => {
    setTransactions({...groupBackEnd.transactions})
    setUsers({...groupBackEnd.users})
    setDebts([...groupBackEnd.debts])
  }
  
  const handleAddTransaction = (name: String, amount: number, giverId: number,receiverId: number) => {
    groupBackEnd.addTransaction({name, amount, giver: groupBackEnd.users[giverId], receiver: groupBackEnd.users[receiverId]});
    updateState();
  }

  const handleDisplayBalances = (e: any) => {
    setIsBalancesDisplayed(true);
  }

  const handleDisplayTransactions = (e: any) => {
    setIsBalancesDisplayed(false);
  }

  return (
    <>
      <h2 className='group-title'>{groupName}</h2>
      <div className='group-section'>
        <button id='group-button-transactions' className={isBalancesDisplayed ? '' : 'selected'} onClick={handleDisplayTransactions}>DEPENSES</button>
        <button id='group-button-balances' className={isBalancesDisplayed ? 'selected' : ''} onClick={handleDisplayBalances}>EQUILIBRE</button>
        {isBalancesDisplayed ? 
          <Balances users={users} debts={debts} /> :
          <TransactionList transactions={transactions} groupName={groupName}></TransactionList>
        }
        
        <NewTransaction users={Object.values(users)} onAddTransaction={handleAddTransaction} />
      </div>
    </>
  );
}
 
export default Group;