import CGroup from "../../back/Group.class";
import TransactionList from "../TransactionList";

import "./Group.css"

interface GroupProps {
  group: CGroup
}
 
const Group = ({group}: GroupProps) => {
  return (
    <>
      <h2 className="group-title">{group.name}</h2>
      <TransactionList transactions={group.transactions}></TransactionList>
    </>
  );
}
 
export default Group;