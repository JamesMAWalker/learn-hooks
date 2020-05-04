import React, { Component } from 'react';

import  './td-form.styles.scss';

class TDForm extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      task: '',
    }
  }
  
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value})
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.addTD(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="TDForm">
        <label htmlFor='task'>Task</label>
        <input onChange={this.handleChange} name='task' id='task' value={this.state.task}/>
        <button>Add TD</button>
      </form>
    );
  }
}

export default TDForm;