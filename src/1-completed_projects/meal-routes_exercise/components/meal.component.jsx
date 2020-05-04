import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Meal extends Component {
  render() {
    const { params } = this.props.match;

    return (
      <div>
        {/\d/.test(params.foodName) || /\d/.test(params.drinkName) ? (
          <Redirect to='/' />
        ) : (
          <div className='Meal-search__container'>
            <div className='food'>
              <h1>EAT UP BAYBEEEEE</h1>
              <h5>{params.foodName}</h5>
              <img
                src={`https://source.unsplash.com/random/250x150/?${params.foodName}`}
                alt=''
                className='food__pic'
              />
            </div>
            <div className='food'>
              <h5>{params.drinkName}</h5>
              <img
                src={`https://source.unsplash.com/random/250x150/?${params.drinkName}`}
                alt=''
                className='food__pic'
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Meal;