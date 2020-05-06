import React, { useState, useEffect } from 'react';

function SandBox(props) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `${count} CLICKS`; 
  })

  return (
    <button onClick={() => setCount(count + 1)} >U CLIKT {count}</button>
  );
}

export default SandBox;