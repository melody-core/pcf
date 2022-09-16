/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-06 16:58:35
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-06 17:01:26
 * @FilePath: /hooks-app/src/client/pages/Status/404/index.tsx
 * @Description: update here
 */
import React from 'react';
import { Link } from 'react-router-dom'
import { Result } from 'antd';

const Page404: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to="/catalogue">回到首页</Link>}
  />
);

export default Page404