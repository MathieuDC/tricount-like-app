import React, { useState } from 'react';
import { FormEventHandler } from "react";
import User from "../../../back/src/models/User";
import AddButton from "./AddButton";
import NewTransactionForm from "./NewTransactionForm";

interface NewTransactionProps {
  onAddTransaction: any,
  users: User[]
}
 
const NewTransaction = ({onAddTransaction, users}: NewTransactionProps) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState(null);
  const [selectedReceiverId, setSelectedReceiverId] = useState(null);
  const [selectedGiverId, setSelectedGiverId] = useState(null);

  const toggleIsFormDisplayed: FormEventHandler = (e) => {
    e.preventDefault();
    setIsFormDisplayed(!isFormDisplayed);
  }

  const handleFormChangeName = (name: any) => {
    setName(name);
  }

  const handleFormChangeAmount = (amount: any) => {
    setAmount(Number(amount));
  }

  const handleFormChangeReceiver = (selectedReceiverId: any) => {
    setSelectedReceiverId(selectedReceiverId);
  }

  const handleFormChangeGiver = (selectedGiverId: any) => {
    setSelectedGiverId(selectedGiverId);
  }

  const handleValidate = () => {
    if(!name || amount == 0 || !selectedGiverId || !selectedReceiverId){
      console.log("Le formulaire n'est pas correctement remplie") //TODO: Handle error
      return;
    }
    onAddTransaction(name, amount, selectedGiverId, selectedReceiverId);
    setIsFormDisplayed(!isFormDisplayed);
  }

  return ( <>
    <AddButton onChange={toggleIsFormDisplayed}/>
    <NewTransactionForm 
      users={users}
      isDisplayed={isFormDisplayed}
      onChangeName={handleFormChangeName}
      onChangeAmount={handleFormChangeAmount}
      onChangeReceiver={handleFormChangeReceiver}
      onChangeGiver={handleFormChangeGiver}
      onValidate={handleValidate}
      onClose={toggleIsFormDisplayed}
    />
  </> );
}
 
export default NewTransaction;