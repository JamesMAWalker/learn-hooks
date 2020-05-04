import React, { Component } from 'react';

class MealSearch extends Component {

  constructor(props) {
    super(props);
    
    this.state = { foodQuery: '', drinkQuery: '' }
  }
  
  handleFood = (evt) => {
    this.setState({ 
      foodQuery: evt.target.value, 
    });
  }

  handleDrink = (evt) => {
    this.setState({ 
      drinkQuery: evt.target.value, 
    });
  }

  handleClick = () => {
    let { foodQuery, drinkQuery } = this.state;

    alert(`Carbed up with ${foodQuery} & ${drinkQuery}`);
    this.props.history.push(`/food/${foodQuery}/drink/${drinkQuery}`);
  }

  render() {
    return (
      <div className='Meal-search'>
        <label htmlFor='input' className='Meal-search__name'>
          Find a Dish!
        </label>
        <input
          id='food-input'
          type='text'
          onChange={this.handleFood}
          value={this.state.foodQuery}
          className='Meal-search__input'
        />
        <label htmlFor='input' className='Meal-search__name'>
          Find a Drink!
        </label>
        <input
          id='drink-input'
          type='text'
          onChange={this.handleDrink}
          value={this.state.drinkQuery}
          className='Meal-search__input'
        />
        <button onClick={this.handleClick} className='Meal-search__btn'>FIND CARBS</button>
      </div>
    );
  }
}

export default MealSearch;