import User from "./User";
import CGroup from "./Group.class";

const db = {};

function groupTest ()  {
  const group = new CGroup("OM");

  const user1 = new User(1, "Messi", "Lionel");
  const user2 = new User(2, "Suarez", "Luis");
  const user3 = new User(3, "Payet", "Dimitry");

  group.add(user1);
  group.add(user2);
  group.add(user3);

  group.addTransaction({id: 1, name: "Arbitre", giver: user1, receiver: user2, amount: 10});
  group.addTransaction({id: 2, name: "Courses", giver: user2, receiver: user3, amount: 27});
  group.addTransaction({id: 3, name: "Essences", giver: user2, receiver: user1, amount: 3});
  group.addTransaction({id: 4, name: "Resto", giver: user1, receiver: user2, amount: 12});
  group.addTransaction({id: 5, name: "Bar", giver: user3, receiver: user2, amount: 24});
  group.addTransaction({id: 6, name: "Bieres", giver: user2, receiver: user1, amount: 150});
  group.addTransaction({id: 7, name: "Course", giver: user1, receiver: user3, amount: 60});

  group.computeDebt();

  return group;
};

export default groupTest;