import React, { Component } from 'react';
import uuid from 'uuid/v4';

import ShoppingForm from './shopping-form.component';

class ShoppingList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      items: [
        { name: 'Tofu', qty: '2', id: uuid() },
        { name: 'Kale', qty: '5', id: uuid() }
      ]
    };
  }
  
  renderList = () => {
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>
            {item.name}:{item.qty}
          </li>
        ))}
      </ul>
    );
  }

  addToList = (item) => {
    let newItem = {...item, id: uuid()} 

    this.setState(state => (
      { items: [...state.items, newItem]}
    ))
  }

  render() {
    return (
      <div>
        <h1>SHOP IT UP</h1>
        {this.renderList()}
        <ShoppingForm addToList={this.addToList}/>
      </div>
    );
  }
}

export default ShoppingList;