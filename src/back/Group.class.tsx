
import { type } from '@testing-library/user-event/dist/type';
import { TransactionI, Transactions } from './Transaction.class';
import User from './User.class'

interface Users{
  [index: number]: User;
}

interface IDebt{
  debterName: String;
  creditorName: String;
  amount: Number;
}

class CGroup{
  users: Users;
  transactions: Transactions;
  name: String;
  debts: IDebt[] = [];

  constructor(name: String){
    this.users = {};
    this.transactions = {};
    this.name = name;
  }

  add(user: User){
    this.users[user.id] = user;
  }

  addTransaction(transaction: TransactionI){
    this.transactions[transaction.id] = transaction;
    this.users[transaction.giver.id].balance += transaction.amount;
    this.users[transaction.receiver.id].balance -= transaction.amount;
    this.computeDebt();
  }

  getUserWithMinBalance(users: Users){
    let minBalance = 0;
    let userId;
    Object.keys(users).forEach(key => {
      const user: User = users[Number(key)];
      if(user.balance < minBalance){
        minBalance = user.balance;
        userId = user.id;
      }
    });
    return userId;
  }

  computeDebt(){
    this.debts = [];
    //On crée une copie profonde
    const users: Users = JSON.parse(JSON.stringify(this.users));

    Object.keys(users).forEach(key => {
      const user: User = users[Number(key)];
      if(user.balance > 0){
        while(user.balance > 0){
          let minBalanceId = this.getUserWithMinBalance(users);
          const minBalanceUser = users[Number(minBalanceId)];
          //Si la dette est plus grande que le crédit
          if(Math.abs(user.balance) >= Math.abs(minBalanceUser.balance)){
            user.balance += minBalanceUser.balance;
            let amount = Math.abs(minBalanceUser.balance);
            minBalanceUser.balance = 0;
            this.debts.push({debterName: minBalanceUser.firstName,creditorName: user.firstName, amount: amount})
          } else {
            minBalanceUser.balance += user.balance;
            let amount = user.balance;
            user.balance = 0;
            this.debts.push({debterName: minBalanceUser.firstName,creditorName: user.firstName, amount: amount})
          }
        }
      }
    });
  }

  toString(){
    let res = "Name  : " + this.name + "\n";
    Object.keys(this.users).forEach(key => {
      const user: User = this.users[Number(key)];
      res += user.name + " : " + String(user.balance) + "\n";
    });
    res += "\n"
    this.debts.forEach(debt => {
      res += debt.debterName + " doit " + debt.amount + " à " + debt.creditorName + "\n";
    });
    return res;
  }
}


export type {IDebt};
export default CGroup;