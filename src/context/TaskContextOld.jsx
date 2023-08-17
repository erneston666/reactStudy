import {createContext} from 'react'

export const TaskContext = createContext() /* nombre del contexto almacena datos*/

export function TaskContextProvider(props) { /*componente que engloba al resto de los componentes, , renderiza un componente de jsx*/

    let x = 20

  return (
<TaskContext.Provider value= {x}> 
    {/* creo el componente, renderizo */}
    {props.children}
</TaskContext.Provider>
   /*  <>
      <h1>componente context</h1>
      {props.children}
    </> */
  )
}

export default TaskContext
