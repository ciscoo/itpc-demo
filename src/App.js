import React, { Component } from 'react'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'
import firebase, { database } from 'firebase'
import config from './config'

class App extends Component {

  constructor(props) {
    super(props)
    firebase.initializeApp(config)
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.todosRef = database().ref().child('todos')
  }

  componentDidMount() {
    this.todosRef.on('child_added', (snapshot) => {
      let todos = this.state.todos
      todos.push({
        id: snapshot.key,
        description: snapshot.val().description
      })
      this.setState({ todos })
    })
    this.todosRef.on('child_removed', (snapshot) => {
      let todos = this.state.todos.filter(todo => {
        return todo.id !== snapshot.key
      })
      this.setState({ todos })
    })
  }

  addTodo(description) {
    this.todosRef.push({ description })
  }

  removeTodo(id) {
    this.todosRef.child(id).remove()
  }

  render() {
    return (
      <div className="columns is-mobile" style={{marginTop: '5%'}}>
        <div className="column is-half is-offset-one-quarter has-text-centered">
          <TodoForm addTodo={this.addTodo} />
          <Todos todos={this.state.todos} removeTodo={this.removeTodo} />
        </div>
      </div>
    )
  }
}

export default App
