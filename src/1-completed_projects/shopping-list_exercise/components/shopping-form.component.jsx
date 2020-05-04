import React, { Component } from 'react';

class ShoppingForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = { name: '', qty: ''}
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.addToList(this.state);
    this.setState({name: '', qty: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label htmlFor='qty'>Quantity</label>
          <input
            id='qty'
            name='qty'
            onChange={this.handleChange}
            value={this.state.qty}
          />
          <button>THROW IT IN THE BAG</button>
        </form>
      </div>
    );
  }
}

export default ShoppingForm;