import React from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import { IDebt } from "../model/Group.class";

interface DebtListProps {
  debts: IDebt[];
}
 
const DebtList = ({debts} : DebtListProps) => {
  const debtsComponent = debts.map((debt) => <li key={uuidv4()}><>{debt.debterName}</> doit <>{debt.amount}</> à <>{debt.creditorName}</></li>)
  return ( <ul>
    {debtsComponent}
  </ul> );
}
 
export default DebtList;