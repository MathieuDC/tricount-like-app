import React from 'react';
import { FunctionComponent } from "react";
import { TransactionI } from "../back/Transaction.class";

import "./Transaction.css";

interface TransactionProps {
  transaction: TransactionI
}
 
const Transaction = ({transaction}: TransactionProps) => {

  const padTo2Digits = (num: Number) => {
    return num.toString().padStart(2, '0');
  }

  return ( 
    <li key={transaction.id} className="transaction-item">
      <div className="transaction-item__name">{transaction.name}</div>
      <div className="transaction-item__amount">{transaction.amount}</div>
      <div className="transaction-item__giver-name">{transaction.giver.firstName}</div>
      {transaction.date ? <div className="transaction-item__date">{padTo2Digits(transaction.date.getDate()) + "/" + padTo2Digits((transaction.date.getMonth() + 1)) + "/" + transaction.date.getFullYear ()}</div> : null}
    </li>
  );
}
 
export default Transaction;