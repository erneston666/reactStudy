import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

   const {createTask}= useContext(TaskContext)
  


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description);
        //const newTask ={title};
        //console.log(newTask);
        //createTask(newTask)
        createTask({title, description});
        setTitle('')
        setDescription('')

    };


  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-600 mb-5'>
        <h1 className='text-2xl font-bold mt-3 bg-white'>Crea tu tarea</h1>
        <input 
        placeholder='Escribe tu tarea'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className='bg-slate-300 p-3 w-full mb-2'
        autoFocus
        />
        <textarea placeholder='descripcion de la tarea'
        onChange={(e) => setDescription(e.target.value)}
        className='bg-slate-300 p-3 w-full mb-2'
        value={description}></textarea>
        <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
    </form>
    </div>
  )
}

export default TaskForm
 