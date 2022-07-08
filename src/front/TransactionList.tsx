import { TransactionI, Transactions } from "../back/Transaction.class";
import Transaction from "./Transaction";

import "./Transaction.css"

interface TransactionListProps {
  transactions: Transactions
}
 
export default ({transactions}: TransactionListProps) => {
  const transactionsItem = Object.values(transactions).map((t: TransactionI) => <Transaction transaction={t}></Transaction>)
  return (<ul className="transaction-list">
    {transactionsItem}
  </ul>);
};