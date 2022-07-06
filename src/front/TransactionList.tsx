import { Transaction, Transactions } from "../back/Transaction";

interface TransactionListProps {
  transactions: Transactions
}
 
export default ({transactions}: TransactionListProps) => {
  const transactionsItem = Object.values(transactions).map((t: Transaction) => <div>{t.giverId + " a donné " + String(t.amount)}<br/></div>)
  return (<>
    {transactionsItem}
  </>);
};