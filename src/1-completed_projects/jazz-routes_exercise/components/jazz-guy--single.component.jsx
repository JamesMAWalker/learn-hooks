import React, { Component } from 'react';

class JazzGuySingle extends Component {
  render() {
    // const { pic, name, bio, facts } = this.props;
    console.log('zzzz',this.props);
    const { name, pic, bio, facts } = this.props.guy;

    let style = { paddingTop: "2.5rem" }
    
    return (
      <div style={style} className='Jazz-guy'>
        <img src={pic} alt={name} className='Jazz-guy__img' />
        <div className='Jazz-guy__details'>
          <h2 className='Jazz-guy__title'>{name}</h2>
          <p className='Jazz-guy__bio'>{bio}</p>
          {
            facts.map(f => (
              <p className="Jazz-guy__fact">{f}</p>
            ))
          }
        </div>
      </div>
    );
  }
}

export default JazzGuySingle;
