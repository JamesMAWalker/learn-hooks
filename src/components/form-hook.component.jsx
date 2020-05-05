import React, { useState } from 'react';
import useFormState from '../custom-hooks/useFormState';

function HookForm(props) {
  // const [email, setEmail] = useState('userEmail');
  
  // const handleChange = (e) => {
  //   setEmail(e.target.value)
  // } 
    
  const [email, setEmail, resetEmail] = useFormState('')

  return (
    <div className='hook-form'>
      <h1>And the email is...{email}</h1>
      <input 
        type="text"
        value={email}
        onChange={setEmail}
      />
      <button onClick={resetEmail}>Submit</button>
      <p>
        This version of the code shows us how much more succinct a component can be when using hooks instead of the old class based component structure. Rather than writing out a constructor and two separate class property methods, we can abstract these away to a custom hook file and then import their functions. This makes the code much more digestible at a glance than the convoluted class based architecture did. 

        Also consider that we can reuse the same logic over and again for several inputs on the page, making this solution much more DRY. 
      </p>
    </div>
  );
}

export default HookForm;