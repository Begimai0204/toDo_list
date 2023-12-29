import React from 'react';

interface TaskProps {
  id: string,
  text: string,
  removeTask: React.MouseEventHandler
}

const Task: React.FC<TaskProps> = ({text, removeTask}) => {
  return (
      <div className="task">
        <p className="task-text">{text}</p>
        <button onClick={removeTask} className="remove-button">Remove</button>
      </div>
  );
};
export default Task;