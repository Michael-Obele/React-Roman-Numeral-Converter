import { useState } from "react";

function App() {
 const [value,setValue] = useState('');
  return (
    <div>
      <h1 className='text-center'>Hello World!</h1>
      {/* You can use bg-dark for dark theme */}
      <div class='card converter text-dark bg-light mb-3'>
        <div class='card-body'>
          <h4 class='card-title text-center'>
            Enter Roman Numerial or Number:
          </h4>
          <div class='form-floating'>
            <input
              type='text'
              class='form-control'
              id='textInput'
              placeholder='Type Here'
              onChange={(e) => setValue(e.target.value)}
            />
            <label for='textInput'>Type Here</label>
          </div>
        </div>
        <div className='card-body content'>
          <h3>{value}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
