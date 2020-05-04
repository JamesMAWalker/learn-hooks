import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './1-message.component';

class CALPICO extends Component {
  render() {
    return (
      <div className='CALPICO'>
        <Link to='/' className='back_btn'>
          飲みたい
        </Link>
        <img
          src='https://66.media.tumblr.com/650c204128e4a212a85d1b116c52512d/4946a4fe09695591-99/s1280x1920/eec3e6af7e43e97141ed1c3de48948721c4ed217.gifv'
          alt=''
          className='CALPICO__image'
        />
        <Message>
          <h1 className='CALPICO__title'>カルピス</h1>
        </Message>
      </div>
    );
  }
}

export default CALPICO;