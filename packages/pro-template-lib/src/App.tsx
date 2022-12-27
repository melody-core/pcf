import { useState } from 'react';
import reactLogo from './assets/react.svg';

import { NormalFilterTableList } from './components';
import './App.css';
import { NormalCreateForm } from './components/NormalCreateForm';

function App() {
  return (
    <div className="App">
      {/* <h2>NormalFilterTableList(v0.0.1):</h2>
      <NormalFilterTableList
        modelConfig={{
          mainModel: 'Student',
        }}
        actionConfig={{
          listName: '学生管理列表',
          createPageUrl: 'xxxx',
          editPageUrl: 'xxx',
        }}
      /> */}
      {/* <h2>NormalCreateForm</h2> */}
      <NormalCreateForm
        modelConfig={{
          mainModel: 'Student',
        }}
        actionConfig={{
          formTitle: '学生创建表单',
          finishedCallbackUrl: 'xxxx',
        }}
      />
    </div>
  );
}

export default App;
