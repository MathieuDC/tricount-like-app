
import CGroup from "../../back/Group.class";
import AddButton from "../AddButton";
import Balances from "../Balances";
import TransactionList from "../TransactionList";

import "./Group.css"

interface GroupProps {
  group: CGroup
}

const handleAddTransaction = (e: any) => {
  e.preventDefault()
  console.log("oui");
}
 
const Group = ({group}: GroupProps) => {
  return (
    <div className="group-section">
      <TransactionList transactions={group.transactions} groupName={group.name}></TransactionList>
      <Balances group={group} />
      <AddButton onChange={handleAddTransaction}/>
    </div>
  );
}
 
export default Group;