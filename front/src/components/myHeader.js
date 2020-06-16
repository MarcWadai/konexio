import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { HomeFilled, EditFilled } from '@ant-design/icons';

function MyHeader() {
  const location = useLocation()
  const initial = location.pathname.substr(1)
  return (
    <Menu selectedKeys={[initial]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeFilled />}>
          <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item key="register" icon={<EditFilled />}>
      <Link to="/register">Register</Link>
      </Menu.Item>
    </Menu>
  );
}

export default MyHeader