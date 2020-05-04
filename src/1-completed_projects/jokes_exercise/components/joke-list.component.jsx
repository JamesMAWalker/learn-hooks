import React, { Component } from 'react';
import { ReactComponent as SkullFace } from '../Icons/skull-face.svg';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import Joke from './joke.component';


class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  }

  constructor(props) {
    super(props);
    
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false
    }

    this.seenJokes = new Set(this.state.jokes.map(j => j.joke));
    console.log(this.seenJokes);
    
  }

  componentDidMount() { 
    if (this.state.jokes.length === 0) this.getJokes();
  }

  getJokes = () => {
    try {
      let newJokes = Array.from(
        { length: this.props.numJokesToGet },
        async () => {
          let jokeRes = await axios.get('https://icanhazdadjoke.com/', {
            headers: { accept: 'application/JSON' }
          });
          return { joke: jokeRes.data.joke, votes: 0, id: uuid() };
        }
      );

      Promise.all(newJokes).then(arr => {
        let freshJokes = arr.filter(el => !this.seenJokes.has(el.joke));

        this.setState(
          st => ({
            loading: false,
            jokes: [...st.jokes, ...freshJokes]
          }),
          () => {
            window.localStorage.setItem(
              'jokes',
              JSON.stringify(this.state.jokes)
            );
            freshJokes.forEach(j => this.seenJokes.add(j.joke));
          }
        );
      });
    } catch (error) {
      alert(error);
      this.setState({ loading: false })
    }
  }

  addVote = (ID, delta) => {
    this.setState(st => ({
      jokes: st.jokes.map(joke => (
        joke.id === ID ? {...joke, votes: joke.votes + delta } : joke
      ))
    }), 
      () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    )
  }  

  moreJokes = () => {
    this.setState({ loading: true }, this.getJokes());
  }

  render() {
    const { jokes } = this.state;
    let sortedJokes = jokes.sort((a, b) => b.votes - a.votes)
 
    if (this.state.loading) {
      return (
        <div className='loading-spinner'>
          <i className='far  fa-10x fa-spin fa-laugh'></i>
          <h2 className='header'>Loading...</h2>
        </div>
      );
    }

    return (
      <div className='joke-list__container'>
        <div className='joke-list__sidebar'>
          <h1 className='joke-list__title header'>
            <span>BAD</span>JOKES
          </h1>
          <SkullFace className='joke-list__icon' />
          <button onClick={this.moreJokes} className='joke-list__button header'>
            LAFFMOAR
          </button>
        </div>
        <div className='joke-list__list'>
          {sortedJokes.map(joke => (
            <Joke
              key={joke.id}
              ID={joke.id}
              joke={joke.joke}
              votes={joke.votes}
              addVote={this.addVote}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;