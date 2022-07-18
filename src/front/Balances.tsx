import React from 'react';
import CGroup, { IDebt, Users } from "./../back/Group.class"

import "./Balances.css"
import DebtList from "./DebtList"

interface BalancesProps {
  users: Users,
  debts: IDebt[]
}
 
const Balances = ({users, debts}: BalancesProps) => {
  const balances = Object.values(users).map((user) => <div key={user.id} className="balance-item"><span>{user.name}</span> <span>{user.balance > 0 ? "+" + user.balance : user.balance}</span></div>)
  return ( <section className="balance-section">
    {balances}
    <DebtList debts={debts} />
    </section>);
}
 
export default Balances;