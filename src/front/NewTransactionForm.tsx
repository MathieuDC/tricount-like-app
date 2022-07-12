import React from 'react';
import User from '../back/User';
import UserSelect from './UserSelect';

import './NewTransactionForm.css';

interface NewTransactionFormProps {
  users: User[],
  isDisplayed: boolean;
}
 
//TODO : Changer pour une balise form quand on pourra faire des requête en back
const NewTransactionForm = ({users, isDisplayed}: NewTransactionFormProps) => {
  
  if(isDisplayed){
    return (<div className="new-transaction-form">
      <label>Titre</label>
      <input type="text" placeholder="Titre"></input>
      <label>Montant</label>
      <input type="text" placeholder="Montant"></input>
      <UserSelect users={users} />
      <button onClick={() => {}}>Valider</button>
    </div>);
  }

  return null;
}
 
export default NewTransactionForm;