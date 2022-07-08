import CGroup from "../../back/Group.class";
import Balances from "../Balances";
import TransactionList from "../TransactionList";

import "./Group.css"

interface GroupProps {
  group: CGroup
}
 
const Group = ({group}: GroupProps) => {
  return (
    <section className="balance-section">
      <h2 className="group-title">{group.name}</h2>
      <TransactionList transactions={group.transactions}></TransactionList>
      <Balances group={group} />
    </section>
  );
}
 
export default Group;