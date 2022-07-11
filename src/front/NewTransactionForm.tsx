import React from 'react';
import User from '../back/User';
import UserSelect from './UserSelect';

interface NewTransactionFormProps {
  users: User[];
}
 
//TODO : Changer pour une balise form quand on pourra faire des requête en back
const NewTransactionForm = ({users}: NewTransactionFormProps) => {
  return ( <div className="new-transaction-form">
    <label>Titre</label>
    <input type="text" placeholder="Titre"></input>
    <label>Montant</label>
    <input type="text" placeholder="Montant"></input>
    <UserSelect users={users} />
    <button onClick={() => {}}>Valider</button>
  </div> );
}
 
export default NewTransactionForm;