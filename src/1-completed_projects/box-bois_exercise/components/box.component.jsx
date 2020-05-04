import React, { Component } from 'react';

class Box extends Component {

  handleClick = () => {
    this.props.removeBox(this.props.id);    
  }

  render() {
    let style = {
      backgroundColor: this.props.color,
      height: this.props.width,
      width: this.props.height,
      display: 'inline-block',
      alignSelf: 'center',
      margin: '2rem',
      transform: 'rotate(90deg)'
    }

    return (
      <div>
        <h4>little box boi</h4>
        <div id={this.props.id} style={style}>:]</div>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default Box;