import React from 'react';

interface FormProps {
  inputValue: string,
  addNewTask: React.ChangeEventHandler<HTMLInputElement>,
  onButtonClick: React.MouseEventHandler
}

const AddTaskForm: React.FC<FormProps> = ({inputValue, addNewTask, onButtonClick}) => {
  return (
      <form className="formAddTask">
        <input type="text"
               placeholder="Add new task"
               value={inputValue}
               onChange={addNewTask}/>
        <button onClick={onButtonClick}>Add</button>
      </form>
  );
};
export default AddTaskForm;