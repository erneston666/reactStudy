import React from 'react'
//import {useContext} from 'react'



function TaskCard({task, deleteTask}) {

//function mostrarAlerta() { alert('Eliminando...' + task.id)  }

 
  return (
    //<TaskContext>
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button 
        //onClick={mostrarAlerta}
        //onClick={(deleteTask)}
        onClick={() => deleteTask(task.id)}
        >Eliminar tarjeta</button>
    </div>
   // </TaskContext>
  )
}

export default TaskCard
