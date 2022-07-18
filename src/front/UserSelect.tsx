import React, { FormEventHandler } from 'react';
import User from "../back/User.class";

import './UserSelect.css';

interface UserSelectProps {
  users: User[],
  onChange: FormEventHandler
}
 
const UserSelect = ({users, onChange}: UserSelectProps) => {
  const usersElement = users.map((user) => <option value={user.id}>{user.firstName}</option> );
  usersElement.unshift(<option value={''}>-</option>);
  
  return (<select className='user-select' onChange={onChange}>
    {usersElement}
  </select>);
}
 
export default UserSelect;