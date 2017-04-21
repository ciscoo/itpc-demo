import React from 'react'

const Todo = ({ todo, removeTodo }) => {
  const handleRemove = (event) => {
    event.preventDefault()
    removeTodo(event.target.value)
  }
  return (
    <tr>
      <th>{todo.id}</th>
      <td>{todo.description}</td>
      <td>
        <div className="block">
          {/*<button className="button is-small is-primary" onClick={} style={{marginRight: 5}} value={todo.id}>Done</button>*/}
          <button className="button is-small is-danger" onClick={handleRemove} value={todo.id}>Remove</button>
        </div>
      </td>
    </tr>
  )
}

export default Todo
