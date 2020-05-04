import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Message from './1-message.component';

class SILKYBLACK extends Component {
  render() {
    return (
      <div className='SILKYBLACK'>
        <Link to='/' className='back_btn'>
          飲みたい
        </Link>
        <img
          src='https://thumbs.gfycat.com/EasyRevolvingKillerwhale-size_restricted.gif'
          alt=''
          className='SILKYBLACK__image'
        />
        <Message>
          <h1 className='SILKYBLACK__title'>ボス no コーヒー</h1>
        </Message>
      </div>
    );
  }
}

export default SILKYBLACK;