import TransactionList from "../front/TransactionList";
import User from "./User";

interface Transaction{
  id: number;
  giver: User;
  receiver: User;
  amount: number;
}

interface Transactions{
  [index: number]: Transaction;
}

export type {Transaction, Transactions};
