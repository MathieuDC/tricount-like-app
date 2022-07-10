interface NewTransactionFormProps {
  
}
 
//TODO : Changer pour une balise form quand on pourra faire des requête en back
const NewTransactionForm = () => {
  return ( <div className="new-transaction-form">
    <label>Titre</label>
    <input type="text"></input>
    <label>Montant</label>
    <input type="text"></input>
  </div> );
}
 
export default NewTransactionForm;