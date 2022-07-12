import React, { FormEventHandler } from 'react';
import User from "../back/User.class";

import './UserSelect.css';

interface UserSelectProps {
  users: User[],
  onChange: FormEventHandler
}
 
const UserSelect = ({users, onChange}: UserSelectProps) => {
  return (<select className='user-select' onChange={onChange}>
    {users.map((user) => <option value={user.id}>{user.firstName}</option> )}
  </select>);
}
 
export default UserSelect;