import React, { Component } from 'react';

import Box from './box.component';
import NewBoxForm from './new-box-form.component';
import uuid from 'uuid/v4';

class BoxList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      boxes: [
        {
          id: uuid(),
          height: '50px',
          width: '50px',
          color: 'deeppink'
        },
      ]
    }
  }
  
  renderBoxes = () => {
    return(
      <div>
        {
          this.state.boxes.map(box => (
            <Box 
              key={box.id} 
              id={box.id}
              color={box.color} 
              height={box.height} 
              width={box.width}
              removeBox={this.removeBox}
            />
          ))
        }
      </div>
    )
  }

  addBox = (box) => {
    let newBox = {...box, id: uuid()}
    console.log(newBox);
    
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }))
  }

  removeBox = (id) => {
    let newBoxes = this.state.boxes.filter(bx => bx.id !== id);
    console.log('111', newBoxes);
    
    this.setState({ boxes: [...newBoxes]})
  } 

  render() {
    return (
      <div>
        <h1>LIST OF BOXES</h1>
        { this.renderBoxes() }
        <NewBoxForm addBox={this.addBox} />
      </div>
    );
  }
}

export default BoxList;