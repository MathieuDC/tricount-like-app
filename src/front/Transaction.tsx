import { FunctionComponent } from "react";
import { TransactionI } from "../back/Transaction.class";

import "./Transaction.css";

interface TransactionProps {
  transaction: TransactionI
}
 
const Transaction = ({transaction}: TransactionProps) => {
  return ( 
    <div className="transaction-item">
      <div className="transaction-item__name">{transaction.name}</div>
      <div className="transaction-item__amount">{transaction.amount}</div>
      <div className="transaction-item__giver-name">{transaction.giver.name}</div>
    </div>
  );
}
 
export default Transaction;