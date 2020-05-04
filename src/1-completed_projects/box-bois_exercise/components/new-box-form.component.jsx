import React, { Component } from 'react';

class NewBoxForm extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      height: '',
      width: '',
      color: '',
    }
  }
  
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    
    this.props.addBox(this.state);
    this.setState({
      height: '',
      width: '',
      color: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='height'>Height</label>
          <input
            id='height'
            name="height"
            onChange={this.handleChange}
            value={this.state.height}
          />
          <label htmlFor='width'>width</label>
          <input
            id='width'
            name="width"
            onChange={this.handleChange}
            value={this.state.width}
          />
          <label htmlFor='color'>color</label>
          <input
            id='color'
            name="color"
            onChange={this.handleChange}
            value={this.state.color}
          />
          <button>Make More Box Bois</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;