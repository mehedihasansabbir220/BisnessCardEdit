import React, { Component, Fragment, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { logout } from '../action/admin';
import { connect } from 'react-redux';
import { withResizeDetector } from 'react-resize-detector';
import { Layout, Menu, Breadcrumb,Dropdown } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DownOutlined 
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const AdminLayout = ({ children, value, openKey, logout }) => {
  // const { key } = props;

  useEffect(() => {
    console.log(value);
    console.log(openKey);
  }, [value]);

  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" href="#"  onClick={e => onFinish()}>
          Đăng xuất
        </a>
      </Menu.Item>
    </Menu>
  );
  
  const onFinish = async () => {
    console.log('Logout')
    await logout();
  };

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
        </div>
        <Menu
          theme="dark"
          selectedKeys={[value]}
          defaultOpenKeys={[openKey]}
          mode="inline"
        >
          <Menu.Item key="default" icon={<DesktopOutlined />}>
            <Link to="/admin/default" title="">
              Trang chủ
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, height: '70px' }}
        >
          <div className="logo-vh">
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" className="logout-admin">
                Admin <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: '0 8px' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>Vuihoc- Học là vui</Footer>
      </Layout>
    </Layout>
  );
};

AdminLayout.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  logout
};

export default withResizeDetector(
  connect(mapStateToProps, mapDispatchToProps)(AdminLayout)
);