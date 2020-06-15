import React, { useState } from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';

import { HomeFilled, EditFilled } from '@ant-design/icons';

function MyHeader() {
  const [current, setCurrent] = useState("")
  let history = useHistory();
  const handleClick = e => {
    history.push(`/${e.key}`)
    setCurrent(e.key)
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeFilled />}>
        Home
      </Menu.Item>
      <Menu.Item key="register" icon={<EditFilled />}>
        Register
      </Menu.Item>
    </Menu>
  );
}

export default MyHeader