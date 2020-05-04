import React, { Component } from 'react';

class JazzGuy extends Component {
  render() {
    const { pic, name , bio } = this.props;
    let leftAlign = name === 'Joe Henderson' ? '--la' : '';

    

    return (
      <div className={`Jazz-guy Jazz-guy${leftAlign}`}>
        <img src={pic} alt={name} className={`Jazz-guy__img Jazz-guy__img${leftAlign}`} />
        <div className='Jazz-guy__details'>
          <h2 className='Jazz-guy__title'>{name}</h2>
          <p className='Jazz-guy__bio'>{bio}</p>
        </div>
      </div>
    );
  }
}

export default JazzGuy;