import { useState } from 'react';
import reactLogo from './assets/react.svg';

import { SelectWithTipImg } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>SelectWithTipImg(v0.0.1):</h2>
      <SelectWithTipImg
        options={[
          {
            label: 'A',
            value: 'A',
          },
          {
            label: 'B',
            value: 'B',
          },
          {
            label: 'C',
            value: 'C',
          },
        ]}
        onChange={console.log}
      />
    </div>
  );
}

export default App;
