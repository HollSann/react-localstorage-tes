import React from "react";


const VisibilityControl = ({ setShowCompleted, cleanTasks, isChecked }) => {

  const handleDelete = () => {
    if (window.confirm('Está seguro de eliminar las tareas completadas?')) {
      cleanTasks()
    }
  }
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          type='checkbox'
          className="form-check-input"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}

        />
        {" "}
        <label>Mostrar tareas completadas</label>
      </div>
      <button onClick={handleDelete}
        className='btn btn-danger btn-sm'

      >Eliminar completadas</button>
    </div>
  )
}

export default VisibilityControl;