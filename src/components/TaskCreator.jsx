
import { useState } from 'react';

const TaskCreator = (props) => {

  const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.createNewTask(newTaskName)
    setNewTaskName('') //una vez se guarda la variable con el valor que ingresó el usuario, se vuelve a reiniciar
  }
  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className='col-9 py-(-3)'>
        <input
          type='text'
          placeholder='Añadir nueva tarea'
          value={newTaskName} // reinicia el campo 
          onChange={(e) => setNewTaskName(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='col-3'>
        <button className='btn btn-primary btn-sm'>Agregar tarea</button>
      </div>
    </form>
  )
}
export default TaskCreator;