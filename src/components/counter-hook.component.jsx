import React, { useState } from 'react';

function CounterHook(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>The current count is: {count}</h1>
      <button onClick={() => setCount(count + 1)} >Add to Count</button>
      <p className="explanation">
        This is a simple illustration of how a the useState() hook can be implemented. Instead of importing component from react, we grab useState(). This hook gives our functional component access to the useState function, which returns an array. Typical practice is to use destructuring to set the name for a piece of state (1st array member), and then a 'set' function that will alter that piece of state (2nd array member). We set the initial value of this piece of state by passing it to useState, as in: 
        
        // useState('initialValue') //
        
        We treat this piece of state like we would any property of this.state in a class based component. To alter that piece of state, we assign the set function to any interaction (button click here), and mutate state in the manner we need to. In this case, we are incrementing count by one, so we simply pass the needed functionality - 'count + 1' - as the argument for the setCount() function. 

        // setCount('mutateStateValue') //
      </p>
    </div>
  );
}

export default CounterHook;