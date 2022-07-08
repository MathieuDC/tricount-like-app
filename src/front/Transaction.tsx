import { FunctionComponent } from "react";
import { TransactionI } from "../back/Transaction.class";

interface TransactionProps {
  transaction: TransactionI
}
 
const Transaction = ({transaction}: TransactionProps) => {
  return ( 
    <div>
      <div>{transaction.name}</div>
      <div>{transaction.amount}</div>
      <div>{transaction.giver.name}</div>
    </div>
  );
}
 
export default Transaction;