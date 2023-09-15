import React from 'react'

function Employee({employee, onDeleteEmployee}) {

  function handleDeleteClick() {
    fetch(`http://localhost:4000/employees/${employee.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteEmployee(employee));
  }

    
  return (
    <div className="remove-employee">
      <button className='remove' onClick={(handleDeleteClick)}>
        Delete
      </button>
    </div>
  )
}

export default Employee