import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './1-message.component';

class RAMUNE extends Component {
  render() {
    return (
      <div className='RAMUNE'>
        <Link to='/' className='back_btn'>
          飲みたい
        </Link>
        <img
          src='https://steamuserimages-a.akamaihd.net/ugc/272853143943996367/A6350C4807D4FD196222B733093BCBB4BE40BBE0/'
          alt=''
          className='RAMUNE__image'
        />
        <Message>
          <h1 className='RAMUNE__title'>ラムネ</h1>
        </Message>
      </div>
    );
  }
}

export default RAMUNE;