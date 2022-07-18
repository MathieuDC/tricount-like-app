import TransactionList from "../front/TransactionList";
import User from "./User.class";

interface TransactionI{
  id?: number;
  name: String;
  giver: User;
  receiver: User;
  amount: number;
}

interface Transactions{
  [index: number]: TransactionI;
}

export type {TransactionI, Transactions};
