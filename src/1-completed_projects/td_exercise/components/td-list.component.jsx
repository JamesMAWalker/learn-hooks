import React, { Component } from 'react';
import uuid from 'uuid/v4';

import TD from './td.component';
import TDForm from './td-form.component';

class TDList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      todos: [
        { task: 'do taxes', id: uuid() },
        { task: 'make dinner', id: uuid() },
        { task: 'exercise', id: uuid() }
      ]
    };
  }

  renderList = () => {
    return(
      <ul>
        {
          this.state.todos.map(todo => (
            <TD editTD={this.editTD} removeTD={this.removeTD} id={todo.id} key={todo.id} task={todo.task}/>
          ))
        }
      </ul>
    )
  }
  
  addTD = (tdItem) => {
    let newTD = {...tdItem, id: uuid()}
    console.log(newTD);
    

    this.setState(state => ({
      todos: [...state.todos, newTD]
    }))
  }

  removeTD = (tdID) => {
    let newTodos = this.state.todos.filter(todo => todo.id !== tdID);

    this.setState({todos: newTodos});
  }

  editTD = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {...todo, task: updatedTask}
      }
      return todo;
    })

    this.setState({todos: updatedTodos});
  }

  render() {
    return (
      <div>
        <h1>GITTIT DUNN</h1>
        { this.renderList() }
        <TDForm addTD={this.addTD}/>
      </div>
    );
  }
}

export default TDList;