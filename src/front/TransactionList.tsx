import React from 'react';
import { TransactionI, Transactions } from "../../../back/src/models/Transaction";
import Transaction from "./Transaction";

import "./Transaction.css"

interface TransactionListProps {
  groupName: String,
  transactions: Transactions
}
 
export default ({transactions, groupName}: TransactionListProps) => {
  const transactionsItem = Object.values(transactions)
    .sort((t1, t2) => t2.date - t1.date)
    .map((t: TransactionI) => <Transaction transaction={t} key={t.id}></Transaction>);
  return (
    <section className="transaction-section">
      <ul className="transaction-list">
        {transactionsItem}
      </ul>
    </section>);
};