import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import {tasks as data} from './data/tasks'
import {useState, useEffect} from 'react'
//imp

 
//rfce y sale todo

function App() {

  const [tasks, setTasks] = useState([]); 

  useEffect (() =>{
    setTasks(data)
  }, [])

    
  function createTask(task) {
    //setTasks([...tasks, task])
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }

  function deleteTask(taskId) {
    //console.log(tasks);
    //console.log(taskId);
    setTasks (tasks.filter(task => task.id !== taskId))
    console.log(tasks);
  }
  
   return (
    <div>
      <TaskForm createTask= {createTask}/>
      <TaskList tasks = {tasks} deleteTask = {deleteTask}/>
    </div>
  )
}

export default App
