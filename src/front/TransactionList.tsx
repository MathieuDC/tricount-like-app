import { Transaction, Transactions } from "../back/Transaction.class";

interface TransactionListProps {
  transactions: Transactions
}
 
export default ({transactions}: TransactionListProps) => {
  const transactionsItem = Object.values(transactions).map((t: Transaction) => <div>{t.giver.name + " a donné " + String(t.amount)}<br/></div>)
  return (<>
    {transactionsItem}
  </>);
};