import React, { FormEventHandler } from 'react';
import User from '../model/User.class';
import UserSelect from './UserSelect';

import './NewTransactionForm.css';

interface NewTransactionFormProps {
  users: User[],
  isDisplayed: boolean,
  onChangeName: any,
  onChangeAmount: any,
  onChangeReceiver: any,
  onChangeGiver: any,
  onValidate: any,
  onClose: any

}
 
//TODO : Changer pour une balise form quand on pourra faire des requête en back
const NewTransactionForm = ({users, isDisplayed,onChangeName, onChangeAmount, onChangeReceiver, onChangeGiver, onValidate, onClose}: NewTransactionFormProps) => {

  const handleChangeName = (e: any) => {
    onChangeName(e.target.value);
  }

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
    return (
      <div className="full-screen-display">
        <div className="new-transaction-form">
          <button className='closing-button' onClick={onClose}>X</button>
          <label>Titre</label>
          <input type="text" placeholder="Titre" onChange={handleChangeName}></input>
          <label>Montant</label>
          <input type="text" placeholder="Montant" onChange={handleChangeAmount}></input>
          <label>Qui donne ?</label>
          <UserSelect users={users} onChange={handleChangeReceiver} />
          <label>Qui reçoit ?</label>
          <UserSelect users={users} onChange={handleChangeGiver} />
          <button onClick={onValidate}>Valider</button>
        </div>
      </div>
    );
  }

  return null;
}
 
export default NewTransactionForm;