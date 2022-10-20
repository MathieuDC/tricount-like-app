
import React, { useEffect } from 'react';
import { useState } from "react";
import { IDebt, IGroup } from "../model/Group.class";
import Balances from "./Balances";
import TransactionList from "./TransactionList";

import "./Group.css"
import NewTransaction from './NewTransaction';


const Group = () => {

  const [groupName, setGroupName] = useState('');
  const [transactions, setTransactions] = useState({});
  const [users, setUsers] = useState({});
  const [debts, setDebts] = useState([] as IDebt[]);
  const [isBalancesDisplayed, setIsBalancesDisplayed] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false);

  
  const updateState = (group: IGroup) => {
    setTransactions({...group.transactions})
    setUsers({...group.users})
    setDebts([...group.debts])
  }
  
  const handleAddTransaction = (name: String, amount: number, giverId: number,receiverId: number) => {
    //groupBackEnd.addTransaction({name, amount, giver: groupBackEnd.users[giverId], receiver: groupBackEnd.users[receiverId]});
    //updateState();
  }

  const handleDisplayBalances = (e: any) => {
    setIsBalancesDisplayed(true);
  }

  const handleDisplayTransactions = (e: any) => {
    setIsBalancesDisplayed(false);
  }

  type JSONResponse = {
    data?: {
      group: IGroup
    }
    errors?: Array<{message: string}>
  }

  const fecthGroup = async () => {
    try {
      const response = await fetch("/groups");
      const group = await response.json()
      if(group){
        return {
          transactions: group.transactions,
          users: group.users,
          name: group.name,
          debts: group.debts
        }
       }
    } catch (error) {
      throw error;
    }
  }
  

  useEffect(() => {
    fecthGroup().then(group => {
      if(group){
        updateState(group);
        setIsDataFetched(true);
      } else throw new Error("Didn't receive any group")
    })
    .catch(console.log)
  }, []);

  return (
      isDataFetched ? (
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
        </>)
        : <div>Fecthing ...</div>
      );
}
 
export default Group;