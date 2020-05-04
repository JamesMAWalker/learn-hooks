import React, { Component } from 'react';
import axios from 'axios';

import Card from './card.component';
import './cards-deck.styles.css';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck/';


class CardsDeck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: '',
      pile: [],
      currCard: [],
    };

    this.drawCard = this.drawCard.bind(this);
  }

  async componentDidMount() {
    let newDeck = await axios.get(`${API_BASE_URL}new/shuffle`);

    this.setState({ 
      deck: newDeck.data,
    });  
  }

  async drawCard() {
    let id = this.state.deck.deck_id

    try {
      const deckUrl = `${API_BASE_URL}${id}/draw/`;
      let cardData = await axios.get(deckUrl);

      if (!cardData.data.success) {
        throw new Error('No cards remaining :(');
      }

      let newCard = cardData.data.cards[0];

      this.setState(state => ({
        pile: [...state.pile, newCard]
      }));
    } catch (error) {
      alert(error);
    }
  }

  renderPile = () => {
    const { pile } = this.state;

    return pile.map(card => (
      <Card srcUrl={card.image} val={card.value} key={card.code} id={card.code}/>
    ))
  }

  render() {
    const style = {
      display: "flex"
    }

    return (
      <div className="cards-deck__container">
        <h1>RandoDeck</h1>
        <button onClick={this.drawCard} >Dealem</button>
        <span style={style} className="card-pile">
          {this.renderPile()}
        </span>
      </div>
    );
  }
}

export default CardsDeck;