import React from 'react';

interface TaskProps {
  text: string,
  removeTask: React.MouseEventHandler
}

const Task: React.FC<TaskProps> = ({text, removeTask}) => {
  return (
      <div className="task">
        <p className="task-text">{text}</p>
        <img onClick={removeTask} className="icon-trash" src="../img/icons8-trash-bin-48.png" alt="Icon trash"/>
      </div>
  );
};
export default Task;