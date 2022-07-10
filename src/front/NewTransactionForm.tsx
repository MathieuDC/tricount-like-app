interface NewTransactionFormProps {
  
}
 
//TODO : Changer pour une balise form quand on pourra faire des requête en back
const NewTransactionForm = () => {
  return ( <div className="new-transaction-form">
    <label>Titre</label>
    <input type="text" placeholder="Titre"></input>
    <label>Montant</label>
    <input type="text" placeholder="Montant"></input>
    <button onClick={() => {}}>Valider</button>
    <select></select>
  </div> );
}
 
export default NewTransactionForm;