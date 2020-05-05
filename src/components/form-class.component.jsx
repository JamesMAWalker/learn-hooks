import React, { Component } from 'react';

class FormClass extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
    };
  }
  
  handleChange = (e) => {
    this.setState({ email: e.target.value });
  }

  render() {
    const { email } = this.state;

    return (
      <div>
        <h1>You entered: {email}</h1>
        <input 
          type="text"
          value={email}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default FormClass;