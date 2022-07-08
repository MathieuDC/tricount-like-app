import { TransactionI, Transactions } from "../back/Transaction.class";
import Transaction from "./Transaction";

interface TransactionListProps {
  transactions: Transactions
}
 
export default ({transactions}: TransactionListProps) => {
  const transactionsItem = Object.values(transactions).map((t: TransactionI) => <Transaction transaction={t}></Transaction>)
  return (<>
    {transactionsItem}
  </>);
};