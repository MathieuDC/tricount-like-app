import React, { useState } from 'react';
import { FormEventHandler } from "react";
import User from "../back/User.class";
import AddButton from "./AddButton";
import NewTransactionForm from "./NewTransactionForm";

interface NewTransactionProps {
  onAddTransaction: FormEventHandler,
  users: User[]
}
 
const NewTransaction = ({onAddTransaction, users}: NewTransactionProps) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);

  const toggleIsFormDisplayed: FormEventHandler = (e) => {
    e.preventDefault();
    setIsFormDisplayed(!isFormDisplayed);
  }

  return ( <>
    <AddButton onChange={toggleIsFormDisplayed}/>
    <NewTransactionForm users={users} isDisplayed={isFormDisplayed} />
  </> );
}
 
export default NewTransaction;