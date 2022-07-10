import { FormEventHandler } from "react";

interface AddButtonProps {
  onChange: FormEventHandler;
}
 
const AddButton = ({onChange}: AddButtonProps) => {
  return (<button className="add-button" onClick={onChange}>+++</button>  );
}
 
export default AddButton;