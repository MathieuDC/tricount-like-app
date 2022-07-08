import CGroup from "./../back/Group.class"

import "./Balances.css"

interface BalancesProps {
  group: CGroup
}
 
const Balances = ({group}: BalancesProps) => {
  const balances = Object.values(group.users).map((user) => <div className="balance-item"><span>{user.name}</span> <span>{user.balance > 0 ? "+" + user.balance : user.balance}</span></div>)
  return ( <>
    {balances}
  </> );
}
 
export default Balances;