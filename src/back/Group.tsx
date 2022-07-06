
import { Transaction, Transactions } from './Transaction';
import User from './User'

interface Users{
  [index: number]: User;
}

interface Debt{
  debterName: String;
  creditorName: String;
  amount: Number;
}

class Group{
  users: Users;
  transactions: Transactions;
  name: String;
  debts: Debt[] = [];

  constructor(name: String){
    this.users = {};
    this.transactions = {};
    this.name = name;
  }

  add(user: User){
    this.users[user.id] = user;
  }

  addTransaction(transaction: Transaction){
    this.transactions[transaction.id] = transaction;
    this.users[transaction.giverId].balance -= transaction.amount;
    this.users[transaction.receiverId].balance += transaction.amount;
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
    const users: Users = JSON.parse(JSON.stringify(this.users));

    Object.keys(users).forEach(key => {
      const user: User = users[Number(key)];
      if(user.balance > 0){
        while(user.balance > 0){
          let minBalanceId = this.getUserWithMinBalance(users);
          const minBalanceUser = users[Number(minBalanceId)];
          if(Math.abs(user.balance) >= Math.abs(minBalanceUser.balance)){
            user.balance += minBalanceUser.balance;
            let amount = Math.abs(minBalanceUser.balance);
            minBalanceUser.balance = 0;
            this.debts.push({debterName: user.firstName,creditorName: minBalanceUser.firstName, amount: amount})
          } else {
            minBalanceUser.balance += user.balance;
            let amount = user.balance;
            user.balance = 0;
            this.debts.push({debterName: user.firstName,creditorName: minBalanceUser.firstName, amount: amount})
          }
        }
      }
    });
  }

  toString(){
    let res = "Name  : " + this.name + "\n";
    console.log(this.users)
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

export default Group;