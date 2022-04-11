import { useState } from 'react';
import { converter, convertToRomanNum, convertFromRoman } from './convert';

function App() {
  const [value, setValue] = useState('');
  const content = (value) => {
    if (/\D/.test(value) && /\d/.test(value)) {
      return <h5>Syntax Error </h5>;
    } else if (/\d/.test(value)) {
      return <h5>{convertToRomanNum(value)}</h5>;
    } else if (/[ivcxlcdm]/.test(value)) {
      return <h5>{convertFromRoman(value)}</h5>;
    } else if (/\w/.test(value)) {
      return <h5>Syntax Error</h5>;
    }
  };
  console.log(/\D/.test(value) && /\d/.test(value));
  return (
    <div>
      <h1 className='text-center'>Hello World!</h1>
      {/* You can use bg-dark for dark theme */}
      <div className='card converter text-dark bg-light mb-3'>
        <div className='card-body'>
          <h4 className='card-title text-center'>
            Enter Roman Numerial or Number:
          </h4>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='textInput'
              autocomplete='off'
              placeholder='Type Here'
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor='textInput'>Type Here</label>
          </div>
        </div>
        <div className='card-body content'>{content(value)}</div>
      </div>
    </div>
  );
}

export default App;
