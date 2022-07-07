import TransactionList from "../front/TransactionList";

interface Transaction{
  id: number;
  giverId: number;
  receiverId: number;
  amount: number;
}

interface Transactions{
  [index: number]: Transaction;
}

export type {Transaction, Transactions};
