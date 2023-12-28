import {useState} from 'react';
import './App.css';
import './Task/Task.tsx';
import './AddTaskForm/AddTaskForm.tsx';
import AddTaskForm from './AddTaskForm/AddTaskForm.tsx';

function App() {
  const [task, setTask] = useState([
    {text: '', key: ''}
  ]);

  return (
      <AddTaskForm></AddTaskForm>

  )
}

export default App
