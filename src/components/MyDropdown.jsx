import React from 'react';
import { Dropdown, Menu,Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const MyDropdown = () => {
    const menu = (
        <Menu>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">
            {/* <div className="button"> */}
                <button className="signUp-button">Sign Up</button>
            {/* </div> */}
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} arrow>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                Hover me <DownOutlined />
            </a>
        </Dropdown>
    );
};

export default MyDropdown;
