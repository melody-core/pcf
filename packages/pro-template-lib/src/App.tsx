import { useState } from 'react';
import reactLogo from './assets/react.svg';

import { NormalFilterTableList } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>NormalFilterTableList(v0.0.1):</h2>
      <NormalFilterTableList
        modelConfig={{
          mainModel: 'Student',
        }}
        actionConfig={{
          listName: '学生管理列表',
          createPageUrl: 'xxxx',
          editPageUrl: 'xxx',
        }}
      />
    </div>
  );
}

export default App;
