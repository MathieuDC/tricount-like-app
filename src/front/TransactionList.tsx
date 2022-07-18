import React from 'react';
import { TransactionI, Transactions } from "../back/Transaction.class";
import Transaction from "./Transaction";

import "./Transaction.css"

interface TransactionListProps {
  groupName: String,
  transactions: Transactions
}
 
export default ({transactions, groupName}: TransactionListProps) => {
  const transactionsItem = Object.values(transactions)
    .sort((t1, t2) => t1.date - t2.date)
    .map((t: TransactionI) => <Transaction transaction={t}></Transaction>);
  return (
    <section className="transaction-section">
      <h2 className="group-title">{groupName}</h2>
      <ul className="transaction-list">
        {transactionsItem}
      </ul>
    </section>);
};