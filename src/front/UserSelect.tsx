import React, { FormEventHandler } from 'react';
import User from "../model/User.class";

import './UserSelect.css';

interface UserSelectProps {
  users: User[],
  onChange: FormEventHandler
}
 
const UserSelect = ({users, onChange}: UserSelectProps) => {
  const usersElement = users.map((user) => <option value={user.id} key={user.id}>{user.firstName}</option> );
  usersElement.unshift(<option value={''} key='0'>-</option>);
  
  return (<select className='user-select' onChange={onChange}>
    {usersElement}
  </select>);
}
 
export default UserSelect;