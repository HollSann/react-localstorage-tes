import './App.css';
import TaskCreator from './components/TaskCreator';
import { useState, useEffect } from 'react';
import TaskTable from './components/TaskTable';
import VisibilityControl from './components/VisibilityControl';
import Container from './components/Container';
function App() {

  const [taskItems, setTaskItems] = useState([]) //tiene que ser un arreglo vacio para ir almacenando las diferentes tasks

  function createNewTask(taskName) {
    if (!taskItems.find(task => task.name === taskName)) { //comparar las task para que no haya repetidas, si devuelve undefined entonces significa que no existe y puede ser añadido
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  useEffect(() => { //useeffect para cuando inicia la aplicación y lea el localStorage
    let data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  //useEffect para guardar las tareas en el localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems]) //si cambias el taskitems vuelve a ejecutar todo lo que esté dentro de la función

  /* Función para eliminar tareas*******/
  const cleanTasks = () => {
    setTaskItems(taskItems.filter(task => !task.done))
    setShowCompleted(false)
  }
  //***Función para actualizar el estado de las tareas cundo están comletadas ******** */
  const toggleTask = task => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name) ? { ...t, done: !t.done } : t)
    )
  }
  //Hook useState para cambiar el valor de tarea completada
  const [showCompleted, setShowCompleted] = useState(false)

  return (
    < main className="bg-dark vh-100 text-white" >

      <Container >

        <TaskCreator
          createNewTask={createNewTask}
        />
        <TaskTable
          tasks={taskItems}
          toggleTask={toggleTask}
        />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />

        {
          showCompleted === true && (
            <TaskTable
              tasks={taskItems}
              toggleTask={toggleTask}
              showCompleted={showCompleted}
            />

          )
        }


      </Container>

    </main >
  );
}

export default App;
