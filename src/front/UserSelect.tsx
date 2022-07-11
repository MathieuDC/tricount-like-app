import React from 'react';
import User from "../back/User";

import './UserSelect.css';

interface UserSelectProps {
  users: User[];
}
 
const UserSelect = ({users}: UserSelectProps) => {
  return (<select className='user-select'>
    {users.map((user) => <option value={user.id}>{user.firstName}</option> )}
  </select>);
}
 
export default UserSelect;