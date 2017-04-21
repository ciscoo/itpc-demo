import React, { Component } from 'react'

export default class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.addTodo = props.addTodo
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showDefaultTitle = this.showDefaultTitle.bind(this)
    this.state = {
      description: ''
    }
  }

  handleChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.addTodo(this.state.description)
    this.setState({
      description: ''
    })
  }

  showDefaultTitle(state) {
    if (!state) {
      return 'React Todo'
    }
    return state
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{marginBottom: 50}}>
        <h1 className="title is-1">{this.showDefaultTitle(this.state.description)}</h1>
        <div className="field has-addons">
          <p className="control is-expanded">
            <input onChange={this.handleChange} className="input is-large" type="text" value={this.state.description} placeholder="Enter a Todo" />
          </p>
          <p className="control">
            <button className="button is-primary is-large">Add Todo</button>
          </p>
        </div>
      </form>
    )
  }
}
