import React, { useState } from 'react';
import useToggle from '../custom-hooks/togglerHook';

function ToggleHookCustom() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isLying, toggleIsLying] = useToggle(true);

  const style = {
    cursor: 'pointer',
  };

  return (
    <div>
      <h1 style={style} onClick={toggleIsHappy}>
        {isHappy ? '(^ v ^ )' : '(-_-)'}
      </h1>
      <h1 style={style} onClick={toggleIsLying}>
        {isLying ? '🤞' : '✌'}
      </h1>
      <p>
        This is the same functionality as the simple toggle component, but instead of writing out an independent toggle method for each of the pieces of state we need to alter, we instead abstract the 'toggling' functionality to a separate file, that is, a custom hook. In this sense, 'hook' means to attach some functionality. In this case, we are 'hooking up' this component with a function, which works as follows: 

        In the custom hook file, we grab useState from react. We then return a functional component with a hook name ('useSomething') that accepts a state value just as useState does. Inside, we call useState with the parameter we passed in, destructuring a state value and a setter function from it. We then create a function that calls the setter function, which as before, simply performs the action that we pass in as its parameter, in this case reversing teh boolean value of the state value we destructured from useState(). 

        In accordance with the typical behavior of built in hooks, we return a two member array from this custom hook, which are the state value and the function that does something to this state value. Lastly, we export the functional component. 

        In this component, we import the hook described above, and treat it just as we would the useState hook. That is, we pass it an initial value, and destructure the state value and setter function from the invocation of the hook. We can then treat the setter function grabbed from the custom hook the same way we would treat it if it were defined inside this component, and in the same way, we can treat the state value from the custom hook as we would the state value abstracted from the useState hook.  
      </p>
    </div>
  );
}

export default ToggleHookCustom;
