import React, { Component } from 'react';

import Number from './number.component';

class NumberLine extends Component {

  test = () => {
    console.log('test successful.');
  }

  render() {
    return (
      <div>
        <Number test={() => this.test()}/>
      </div>
    );
  }
}

export default NumberLine;