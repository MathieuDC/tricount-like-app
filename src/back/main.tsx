import User from "./User";
import Group from "./Group";

const db = {};

function mainTest ()  {
  const group = new Group("OM");

  group.add(new User(1, "Messi", "Lionel"));
  group.add(new User(2, "Suarez", "Luis"));
  group.add(new User(3, "Payet", "Dimitry"));

  group.addTransaction({id: 1, giverId: 1, receiverId: 2, amount: 10});
  group.addTransaction({id: 2, giverId: 2, receiverId: 3, amount: 27});
  group.addTransaction({id: 3, giverId: 2, receiverId: 1, amount: 3});
  group.addTransaction({id: 4, giverId: 1, receiverId: 2, amount: 12});
  group.addTransaction({id: 5, giverId: 3, receiverId: 2, amount: 24});
  group.addTransaction({id: 6, giverId: 2, receiverId: 1, amount: 150});
  group.addTransaction({id: 7, giverId: 1, receiverId: 3, amount: 60});

  group.computeDebt();

  console.log(group.toString());
};

export default mainTest;