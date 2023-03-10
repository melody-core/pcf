import { useState } from 'react';
import { Tree } from 'antd';

import {
  NormalCreateForm,
  NormalDetailForm,
  NormalFilterTableList,
  NormalEditForm,
} from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h2>NormalFilterTableList(v0.0.1):</h2> */}
      {/* <NormalFilterTableList
        modelConfig={{
          mainModel: 'Student',
        }}
        actionConfig={{
          listName: '学生管理列表',
          rowOptionBtnGroup: [
            {
              title: '详情',
              type: 'linkTo',
              url: '/xxx',
            },
            {
              title: '编辑',
              type: 'linkTo',
              url: '/xxx',
            },
          ],
        }}
      /> */}
      {/* <h2>NormalCreateForm</h2> */}
      {/* <NormalCreateForm
        modelConfig={{
          mainModel: 'Student',
        }}
        actionConfig={{
          formTitle: '学生创建表单',
          finishedCallbackUrl: 'xxxx',
        }}
      /> */}
      {/* <NormalDetailForm
        modelConfig={{
          mainModel: 'Student',
        }}
        actionConfig={{
          formTitle: '学生创建表单',
          finishedCallbackUrl: 'xxxx',
        }}
      /> */}
      {/* <NormalEditForm
        modelConfig={{
          mainModel: 'Student',
        }}
        actionConfig={{
          finishedCallbackUrl: 'xxxx',
        }}
      /> */}
    </div>
  );
}

export default App;
