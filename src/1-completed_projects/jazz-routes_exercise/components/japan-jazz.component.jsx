import React, { Component } from 'react';

import { JAZZ_DATA } from '../data/jazz.data';
import JazzGuy from './jazz-guy.component';

class JapanJazz extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      jazzGuys: JAZZ_DATA.jazzGuys
    }
  }
  

  render() {
    const { jazzGuys } = this.state;

    return (
      <div className="Japan-jazz__container">
        {
          jazzGuys.map(jg => (
            <JazzGuy bio={jg.bio} facts={jg.facts} pic={jg.pic} name={jg.name} />
          ))
        }
      </div>
    );
  }
}

export default JapanJazz;