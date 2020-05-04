import React, { Component } from 'react';

class Number extends Component {
  render() {
    let { test } = this.props;

    return (
      <div>
        <button onClick={test}>Clickitt</button>
      </div>
    );
  }
}

export default Number;