import User from "../back/User";

interface UserSelectProps {
  users: User[];
}
 
const UserSelect = ({users}: UserSelectProps) => {
  return (<select>
    {users.map((user) => <option value={user.id}>`${user.firstName}`</option> )}
  </select>);
}
 
export default UserSelect;