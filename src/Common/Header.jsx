import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'; // If using React Router

const { Header, Content, Footer } = Layout;

const HeaderNavigation = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link> {/* If using React Router */}
            {/* <a href="/">Home</a> If not using React Router */}
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">About</Link> {/* If using React Router */}
            {/* <a href="/about">About</a> If not using React Router */}
          </Menu.Item>
          {/* Add more Menu.Items for additional navigation links */}
        </Menu>
      </Header>
    </Layout>
  );
};

export default HeaderNavigation;
