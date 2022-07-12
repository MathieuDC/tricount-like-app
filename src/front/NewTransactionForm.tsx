import React, { FormEventHandler } from 'react';
import User from '../back/User.class';
import UserSelect from './UserSelect';

import './NewTransactionForm.css';

interface NewTransactionFormProps {
  users: User[],
  isDisplayed: boolean,
  onChangeAmount: any,
  onChangeReceiver: any,
  onChangeGiver: any,
  onValidate: any

}
 
//TODO : Changer pour une balise form quand on pourra faire des requête en back
const NewTransactionForm = ({users, isDisplayed, onChangeAmount, onChangeReceiver, onChangeGiver, onValidate}: NewTransactionFormProps) => {

  const handleChangeAmount = (e: any) => {
    onChangeAmount(e.target.value);
  }

  const handleChangeReceiver = (e: any) => {
    onChangeGiver(e.currentTarget.value);
  }

  const handleChangeGiver = (e: any) => {
    onChangeReceiver(e.currentTarget.value);
  }
  
  if(isDisplayed){
    return (<div className="new-transaction-form">
      <label>Titre</label>
      <input type="text" placeholder="Titre" onChange={handleChangeAmount}></input>
      <label>Montant</label>
      <input type="text" placeholder="Montant"></input>
      <label>Qui donne ?</label>
      <UserSelect users={users} onChange={handleChangeReceiver} />
      <label>Qui reçoit ?</label>
      <UserSelect users={users} onChange={handleChangeGiver} />
      <button onClick={onValidate}>Valider</button>
    </div>);
  }

  return null;
}
 
export default NewTransactionForm;