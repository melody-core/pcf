/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-06 15:21:55
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-10 10:46:26
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/client/components/UserIcon/index.tsx
 * @Description: update here
 */

import React, { FC } from 'react'
import { Dropdown, Menu, Button, Avatar, message } from 'antd';
import { observer } from 'mobx-react';
// import { Link } from 'react-router-dom'
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import userStore from './../../store/user';
import { useLogin } from './effect';

import type { UserIconProps } from './type';
import styles from './index.module.css';




export const UserIcon: FC<UserIconProps> = ({store = {}}) => {
  const { userinfo, isLogin } = store;
  useLogin(isLogin);
  if(!isLogin || !userinfo) {
    return (
      // <Link to={"/login"}>登录</Link>
      <a onClick={()=>message.warn('暂未接入登录功能')}>登录</a>
    )
  }
  const {
    name,
    nickname,
    avatar,
  } = userinfo;
  return (
    <div className={styles['user-icon-wrap']}>
      <Dropdown overlay={<Menu items={[{
        label: '用户中心',
        key: '1',
        icon: <UserOutlined />,
      },
      {
        label: '用户设置',
        key: '2',
        icon: <SettingOutlined />,
      },
      {
        label: '退出登录',
        key: '3',
        danger: true,
        icon: <LogoutOutlined />,
      }]}/>}>
        <Button ghost style={{border: 'none'}}>
          <Avatar size="small" icon={<UserOutlined />} src={avatar}/>
          <span className={styles['user-name']}>{name || nickname}</span>
        </Button>
      </Dropdown>
    </div>
  )
}

export default observer(()=><UserIcon store={userStore}/>);

