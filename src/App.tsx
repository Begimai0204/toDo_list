import React, {useState} from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm.tsx';
import Task from './Task/Task.tsx';

interface TaskProps {
  id: string,
  text: string
}
function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {text: 'Bye milk', id: '1'},
    {text: 'Sport 1 hour', id: '2'},
    {text: 'Do homework', id: '3'}
  ]);
  const [currentTask, setCurrentTask] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);


  };
  const addNewTask = () => {
    if (currentTask === '') {
      alert('Enter a task!');
      return;
    }

    const newTask: TaskProps = {text: currentTask, id: `${Date.now()}`};
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setCurrentTask('');
  };
  const removeTask = (taskId: string) => {
    const index = tasks.findIndex((task) => task.id !== taskId);
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  };
  return (
      <div>
        <h1>ToDO</h1>
        <AddTaskForm
            onButtonClick={addNewTask}
            onInputChange={handleInputChange}
            inputValue={currentTask}/>
        {tasks.map((task) => (
            <Task key={task.id} id={task.id} text={task.text} removeTask={() => removeTask(task.id)}/>
        ))}
      </div>


  )
}

export default App
