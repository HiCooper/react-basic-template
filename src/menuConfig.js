// 左侧菜单，概览和存储 bucket 列表
import { ClockCircleOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

const sideMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: <MailOutlined />,
  },
  {
    name: '系统管理',
    path: '/system',
    icon: <SettingOutlined />,
    exact: true,
    children: [
      {
        name: '账号管理',
        path: '/account',
        icon: <UserOutlined />,
        exact: true,
        roles: ['ROLE_ADMIN'],
      },
      {
        name: '登陆日志',
        path: '/op-log',
        icon: <ClockCircleOutlined />,
        exact: true,
      },
    ],
  },
];

export default sideMenuConfig;