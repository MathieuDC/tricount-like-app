import { IDebt } from "../back/Group.class";

interface DebtListProps {
  debts: IDebt[];
}
 
const DebtList = ({debts} : DebtListProps) => {
  const debtsComponent = debts.map((debt) => <li key={Number(debt.creditorName)}><>{debt.debterName}</> doit <>{debt.amount}</> à <>{debt.creditorName}</></li>)
  return ( <ul>
    {debtsComponent}
  </ul> );
}
 
export default DebtList;