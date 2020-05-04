import React, { Component } from 'react';

class DogRoute extends Component {
  render() {
    const { name } = this.props;

    const style = {
      backgroundPosition: `0 25%`,
      backgroundSize: `cover`,
      backgroundImage: `url(
        https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2010&q=80
      )`
    };

    return (
      <div className='Dawg' style={style}>
        <h2 className='Dawg__text'>HIS<br/>NAME<br/>IS<br/>{name}</h2>
      </div>
    );
  }
}

export default DogRoute;