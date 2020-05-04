import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    };
  }
  
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>The current count is: {count}</h1>
        <button onClick={this.increment} >Add to Count</button>
        <p className="explanation">
          For comparative purposes, we demonstrate here how a class based component would alter state. We'd first set state in a constructor, then write a class property function that uses setState() to alter that state value. Then we'd display that state value in the mark up, and assign the CPF to an interactable, in this case a button click. 
        </p>
      </div>
    );
  }
}

export default CounterClass;