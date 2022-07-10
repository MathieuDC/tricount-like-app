
import CGroup from "../../back/Group.class";
import Balances from "../Balances";
import TransactionList from "../TransactionList";

import "./Group.css"

interface GroupProps {
  group: CGroup
}
 
const Group = ({group}: GroupProps) => {
  return (
    <div className="group-section">
      <TransactionList transactions={group.transactions} groupName={group.name}></TransactionList>
      <Balances group={group} />
    </div>
  );
}
 
export default Group;