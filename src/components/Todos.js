import React from 'react'
import Todo from './Todo'

const Todos = ({ todos, removeTodo }) => {
  return (
    <table className="table is-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Todo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>)}
      </tbody>
    </table>
  )
}

export default Todos
