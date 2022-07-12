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
  const [selectedReceiverId, setSelectedReceiverId] = useState(null);
  const [selectedGiverId, setSelectedGiverId] = useState(null);

  const toggleIsFormDisplayed: FormEventHandler = (e) => {
    e.preventDefault();
    setIsFormDisplayed(!isFormDisplayed);
  }

  const handleFormChangeReceiver = (selectedReceiverId: any) => {
    setSelectedReceiverId(selectedReceiverId);
  }

  const handleFormChangeGiver = (selectedGiverId: any) => {
    setSelectedGiverId(selectedGiverId);
  }

  const handleValidate = () => {
    console.log('Give: ' + selectedGiverId);
    console.log('Receive: ' + selectedReceiverId);
  }

  return ( <>
    <AddButton onChange={toggleIsFormDisplayed}/>
    <NewTransactionForm 
      users={users}
      isDisplayed={isFormDisplayed}
      onChangeReceiver={handleFormChangeReceiver}
      onChangeGiver={handleFormChangeGiver}
      onValidate={handleValidate}
    />
  </> );
}
 
export default NewTransaction;