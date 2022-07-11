import React from 'react';
import CGroup from "./../back/Group.class"

import "./Balances.css"
import DebtList from "./DebtList"

interface BalancesProps {
  group: CGroup
}
 
const Balances = ({group}: BalancesProps) => {
  const balances = Object.values(group.users).map((user) => <div key={user.id} className="balance-item"><span>{user.name}</span> <span>{user.balance > 0 ? "+" + user.balance : user.balance}</span></div>)
  return ( <section className="balance-section">
    {balances}
    <DebtList debts={group.debts} />
    </section>);
}
 
export default Balances;