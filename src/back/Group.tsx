import User from './User'

interface Users{
  [index: number]: User;
}

class Group{
  users: Users;

  constructor(){
    this.users = {};
  }

  add(user: User){
    this.users[user.id] = user;
  }
}

export default Group;