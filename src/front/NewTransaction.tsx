import React from 'react';
import { FormEventHandler } from "react";
import User from "../back/User";
import AddButton from "./AddButton";
import NewTransactionForm from "./NewTransactionForm";

interface NewTransactionProps {
  onAddTransaction: FormEventHandler,
  users: User[]
}
 
const NewTransaction = ({onAddTransaction, users}: NewTransactionProps) => {
  return ( <>
    <AddButton onChange={onAddTransaction}/>
    <NewTransactionForm users={users}/>
  </> );
}
 
export default NewTransaction;