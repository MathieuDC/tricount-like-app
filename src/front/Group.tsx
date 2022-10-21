
import React, { useEffect } from 'react';
import { useState } from "react";
import { IDebt, IGroup, Users } from "../../../back/src/models/Group";
import Balances from "./Balances";
import TransactionList from "./TransactionList";

import "./Group.css"
import NewTransaction from './NewTransaction';
import { TransactionI } from '../../../back/src/models/Transaction';


const Group = () => {
  const [groupId, setGroupId] = useState('');
  const [groupName, setGroupName] = useState('');
  const [transactions, setTransactions] = useState({});
  const [users, setUsers] = useState<Users>({});
  const [debts, setDebts] = useState([] as IDebt[]);
  const [isBalancesDisplayed, setIsBalancesDisplayed] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false);

  
  const updateState = (group: IGroup) => {
    setGroupId(group.id);
    setTransactions({...group.transactions})
    setUsers(group.users)
    setDebts([...group.debts])
  }

  const fecthTransaction = async (transaction: TransactionI) => {
    try {
      const response = await fetch(`/groups/${groupId}/transaction`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
      });
      
      const group = await response.json()
      if(group){
        return {
          id: group.id,
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
  
  const handleAddTransaction = (name: String, amount: number, giverId: number,receiverId: number) => {
    fecthTransaction({name, amount, giver: users[giverId], receiver: users[receiverId]}).then(group => {
      if(group)updateState(group)
      else throw new Error("Didn't receive any group")
    })
    .catch(console.log)
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
      if(group) return group
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