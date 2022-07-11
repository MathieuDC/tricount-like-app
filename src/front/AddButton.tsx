import React from 'react';
import { FormEventHandler } from "react";

import "./AddButton.css"

interface AddButtonProps {
  onChange: FormEventHandler;
}
 
const AddButton = ({onChange}: AddButtonProps) => {
  return (<button className="add-button" onClick={onChange}>+</button>  );
}
 
export default AddButton;