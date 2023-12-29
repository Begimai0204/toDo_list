import React from 'react';

interface FormProps {
  inputValue: string,
  onInputChange: React.ChangeEventHandler<HTMLInputElement>,
  onButtonClick: React.MouseEventHandler
}

const AddTaskForm: React.FC<FormProps> = ({inputValue, onInputChange, onButtonClick}) => {
  return (
      <div>
        <input type="text"
               placeholder="Add new task"
               value={inputValue}
               onChange={onInputChange}/>
        <button onClick={onButtonClick}>Add</button>
      </div>
  );

};
export default AddTaskForm;