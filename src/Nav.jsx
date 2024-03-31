import React from 'react';
import { Menu, Dropdown,Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Nav = () => {
    const menu = (
       <Menu>
         <Menu.Item key="1">Photos</Menu.Item>
         <Menu.Item key="2">Videos</Menu.Item>
         <Menu.Item key="3">Icon</Menu.Item>
       </Menu>
    );
   
    return (
       <div className="navbar">
         <Menu mode="horizontal" style={{ padding: '0 20px' }}>
           <Menu.Item key="1" >Home</Menu.Item>
           <Menu.Item key="2">About</Menu.Item>
           <Menu.Item key="3">Services</Menu.Item>
           <Menu.Item key="4">Contact</Menu.Item>
           <Dropdown overlay={menu} trigger={['hover']}>
             <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
               Explore <DownOutlined />
             </a>
           </Dropdown>
           <div className="navbar-buttons">
             <Button  className="navbar-button">API</Button>
           </div>
         </Menu>
       </div>
    );
   };

export default Nav;