import React from 'react';
import { FunctionComponent } from "react";
import { TransactionI } from "../../../back/src/models/Transaction";

import "./Transaction.css";

interface TransactionProps {
  transaction: TransactionI
}
 
const Transaction = ({transaction}: TransactionProps) => {

  const padTo2Digits = (num: Number) => {
    return num.toString().padStart(2, '0');
  }

  //TODO Mettre ça ailleur
  if(typeof(transaction.date) === 'string') transaction.date = new Date(transaction.date)

  return ( 
    <li className="transaction-item">
      <div className="transaction-item__name">{transaction.name}</div>
      <div className="transaction-item__amount">{transaction.amount}</div>
      <div className="transaction-item__giver-name">{transaction.giver.firstName}</div>
      {transaction.date ? <div className="transaction-item__date">{padTo2Digits(transaction.date.getDate()) + "/" + padTo2Digits((transaction.date.getMonth() + 1)) + "/" + transaction.date.getFullYear ()}</div> : null}
    </li>
  );
}
 
export default Transaction;