import React, { Component } from 'react';

import './td.styles.scss';

class TD extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      isEditing: false,
      task: this.props.task,
      done: false,
    }
  }
  

  handleRemove = () => {
    this.props.removeTD(this.props.id)
  }

  toggleForm = () => {
    this.setState({isEditing: !this.state.isEditing})
  }

  handleUpdate = (evt) => {
    evt.preventDefault();

    this.props.editTD(this.props.id, this.state.task);
    
    this.toggleForm();
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  toggleDone = () => {
    this.setState({done: !this.state.done});
    console.log('switch doneness');
    
  }

  render() {
      let { task, id } = this.props;
      let { done } = this.state;
      let result;

      if (this.state.isEditing) {
        result = (
          <form onSubmit={this.handleUpdate}>
            <label htmlFor='task'></label>
            <input
              id='task'
              name='task'
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Confirm Edit</button>
          </form>
        );
      } else {
        result = (
          <li className='TD-item'>
            <p
              onClick={this.toggleDone}
              key={id}
              className={done ? `TD TD-done` : `TD`}
            >
              {task}
            </p>
            <div
              className='TD-buttons'
              style={done ? { display: 'none' } : { display: 'flex' }}
            >
              <button onClick={this.toggleForm}>edit</button>
              <span>|</span>
              <button onClick={this.handleRemove}>remove</button>
            </div>
          </li>
        );
      }
      
      return result;
  }
}

export default TD;