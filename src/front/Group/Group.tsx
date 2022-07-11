
import React from 'react';
import { useState } from "react";
import CGroup from "../../back/Group.class";
import AddButton from "../AddButton";
import Balances from "../Balances";
import TransactionList from "../TransactionList";

import groupTest from '../../back/main';

import "./Group.css"
import NewTransactionForm from "../NewTransactionForm";
import NewTransaction from '../NewTransaction';

interface GroupProps {
  group: CGroup
}

const handleAddTransaction = (e: any) => {
  e.preventDefault()
  console.log("oui");
}
 
const Group = () => {
  const [group, setGroup] = useState(groupTest())

  return (
    <div className="group-section">
      <TransactionList transactions={group.transactions} groupName={group.name}></TransactionList>
      <Balances group={group} />
      <NewTransaction users={Object.values(group.users)} onAddTransaction={handleAddTransaction} />
    </div>
  );
}
 
export default Group;