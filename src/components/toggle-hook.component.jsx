import React, { useState } from 'react';

function ToggleHook(props) {
  const [isHappy, setIsHappy] = useState(true);
  const [isLying, setIsLying] = useState(false);

  const toggleMood = () => {
    setIsHappy(!isHappy);
  }

  const toggleTruth = () => {
    setIsLying(!isLying);
  }

  const style = {
    cursor: 'pointer',
  };

  return (
    <div>
      <h1 style={style} onClick={toggleMood}>{isHappy ? '(^ v ^ )' : '(-_-)'}</h1>
      <h1 style={style} onClick={toggleTruth} >{isLying ? '🤞' : '✌'}</h1>
      <p>This component illustrates the use of multiple useState() functions. Because useState() is named upon its invocation, we can use it as many times as needed in a component by assigning different names to state.</p>
    </div>
  );
}

export default ToggleHook;