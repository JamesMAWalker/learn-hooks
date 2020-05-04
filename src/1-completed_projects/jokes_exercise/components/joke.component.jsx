import React, { Component } from 'react';

class Joke extends Component {

  upVote = () => {
    this.props.addVote(this.props.ID, 1);
  }
  
  downVote = () => {
    this.props.addVote(this.props.ID, -1);
  }

  reaction = () => {
    if (this.props.votes >= 15) {
      return `em em-skull`;
    } else if (this.props.votes >= 11) {
      return `em em-laughing`;
    } else if (this.props.votes >= 7) {
      return `em em-sweat_smile`;
    } else if (this.props.votes >= 4) {
      return `em em-smiley`;
    } else if (this.props.votes >= 1) {
      return `em em-confused`;
    } else if (this.props.votes >= -1) {
      return `em em-expressionless`;
    } else if (this.props.votes >= -5) {
      return `em em-angry`;
    } 
  }

  getColor = () => {
    if (this.props.votes >= 15) {
      return 'rgb(5, 245, 97)';
    } else if (this.props.votes >= 10) {
      return `rgb(161, 236, 39)`;
    } else if (this.props.votes >= 5) {
      return `rgb(236, 151, 39)`;
    } else if (this.props.votes >= 0) {
      return `rgb(206, 54, 16)`;
    } else if (this.props.votes < -1) {
      return `rgb(145, 9, 9)`;
    } 
  }

  render() {
    let { joke, votes } = this.props;

    let voteColor = {
      border: `4px solid ${this.getColor()}`
    }

    return (
      <div className='Joke'>
        <div className='Joke__buttons'>
          <i onClick={this.upVote} className='fas fa-arrow-up upvote'></i>
          <span style={voteColor} className='Joke__votes '>{votes}</span>
          <i onClick={this.downVote} className='fas fa-arrow-down downvote'></i>
        </div>
        <p className='Joke__joke'>{joke}</p>
        <i className={`${this.reaction()} Joke__emoji`} ></i>
      </div>
    );
  }
}

export default Joke;